import React, { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CommonResult, mapToObject } from "../../../common/common"
import ModalComponent from "../../../component/ModalComponent"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"
import { SellerRespVO } from "../../authen/record/record.resp.vo"
import { CartItemRespVO, CartRespVO } from "../record/record.resp.vo"
import cartService from "../service/cart.service"

function CartPageComponent() {
    const [commonResult, setCommonResult] = useState<CommonResult<Array<CartRespVO>>>()
    const [itemMap, setItemMap] = useState<Map<SellerRespVO, Array<CartItemRespVO>>>(new Map<SellerRespVO, Array<CartItemRespVO>>())
    const [selectedItems, setSelectedItems] = useState<Map<number | undefined, any>>(new Map<number | undefined, any>);

    

    // Handle select/deselect all items for a specific seller
    const handleSelectAll = (cartResp: any, check: any) => {
        const newItemMap = new Map(itemMap);  // Create a new instance of the Map to trigger re-render
        if (check) {
            const itemIds = cartResp.cartItems?.map((item: any) => item);
            newItemMap.set(cartResp.seller, itemIds);
        } else {
            newItemMap.delete(cartResp.seller);
        }
        setItemMap(newItemMap);  // Update state with new map

    };

    // Handle select/deselect individual item
    const handleSelectItem = (cartResp: any, item: any, check: any) => {
        const newItemMap = new Map(itemMap);
        let items = newItemMap.get(cartResp.seller) || [];

        if (check) {
            items.push(item);
        } else {
            items = items.filter(x => x.id !== item.id);
        }

        //@ts-ignore
        document.getElementById("flexCheckChecked-seller" + cartResp.seller?.id).checked = false
        newItemMap.set(cartResp.seller, items);
        setItemMap(newItemMap);  // Update state with new map
    };


    const checkWhetherItemCurrentIsSelected = (seller: any, itemId: any) => {
        const res = itemMap.get(seller)?.find((item) => {
            return item.id === itemId
        })
        if (res) {
            return true
        }
        return false
    }

    const totalProductIsSelected = () => {
        let sum = 0
        let totalPrice = 0
        itemMap.forEach(value => {
            value.forEach(item => {
                sum += 1
                //@ts-ignore
                totalPrice += item.product?.price * item.quantity
            })
        })
        return {
            "sum": sum,
            "totalPrice": totalPrice
        }
    }


    useEffect(() => {
        cartService.getAllItemFromCart().then(res => {
            if (res.data.code === 200) {
                setCommonResult(res.data)

                const state = window.history.state
                //@ts-ignore
                const carts: Array<CartRespVO> = res.data.data
                if(state.skuId) {
                    carts?.forEach(cart => {
                        const item = cart.cartItems?.filter(item => {
                            return item.product?.id === state.skuId
                        })?.at(0)
                        if(item) {
                            handleSelectItem(cart, item, true)
                        }
                    })
                }
            } else {
                alert(res.data.message)
            }
        })

       
    }, [])
    return (
        <div>
            <HeaderComponent />

            <div className="container-fluid fruite">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commonResult?.data && commonResult.data.map((cartResp) => {
                                    return <Fragment>
                                        <tr>
                                            <td colSpan={3}><a className="border-secondary rounded-pill btn"
                                                onClick={() => {
                                                    const path = "/shop?seller=" + cartResp.seller?.shopName
                                                    history.pushState({"sellerId": cartResp.seller?.id}, "", path)
                                                    window.location.href = path
                                                }}
                                            >
                                                {cartResp.seller?.shopName}</a></td>
                                            <td colSpan={4}>
                                                <div>
                                                    <input className="form-check-input"
                                                        type="checkbox" id={"flexCheckChecked-seller" + cartResp.seller?.id}
                                                        onChange={(e: any) => {
                                                            handleSelectAll(cartResp, e.target.checked)

                                                        }}
                                                        style={{ marginRight: "20px", width: "25px", height: "25px" }}
                                                    />
                                                    <label className="form-check-label" htmlFor={"flexCheckChecked-seller" + cartResp.seller?.id} style={{ marginTop: "5px", fontWeight: "bold" }}>
                                                        Choose all
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        {cartResp.cartItems?.map((item) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="btn">
                                                            <input className="form-check-input" type="checkbox"
                                                                checked={checkWhetherItemCurrentIsSelected(cartResp.seller, item.id)}
                                                                onChange={(e: any) => {
                                                                    handleSelectItem(cartResp, item, e.target.checked)
                                                                }}
                                                                value="" id={"flexCheckChecked" + item.id} style={{ width: "25px", height: "25px" }} />
                                                        </div>
                                                    </td>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <img src={item.product?.image} className="img-fluid me-5 rounded-circle" style={{ width: "80px", height: "80px" }} alt="" />
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <p className="mb-0 mt-4">{item.product?.name} - {item.product?.properties}</p>
                                                    </td>
                                                    <td>
                                                        <p className="mb-0 mt-4">{item.product?.price?.toLocaleString()}</p>
                                                    </td>
                                                    <td>
                                                        <div className="input-group quantity mt-4">
                                                            <div className="input-group-btn">
                                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="form-control form-control-sm text-center " style={{ border: "none", backgroundColor: "white", }} >{item.quantity}</div>
                                                            <div className="input-group-btn">
                                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="mb-0 mt-4">{item.totalPrice?.toLocaleString()}</p>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-md rounded-circle bg-light border mt-4" >
                                                            <i className="fa fa-times text-danger"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </Fragment>
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-6">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Total Price:</h5>
                                        <p className="mb-0">{totalProductIsSelected().totalPrice.toLocaleString()}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Total Product</h5>
                                        <div className="d-flex flex-column">
                                            <p className="mb-0">{totalProductIsSelected().sum}</p>

                                        </div>

                                    </div>
                                </div>
                                <a href="javascript:(0)" 
                                    onClick={() => {
                                        let check = false
                                        itemMap.forEach(item => {
                                            if(item.length > 0) {
                                                check = true
                                            }
                                        })
                                        if(check) {
                                            // console.log(itemM)
                                            history.pushState({"itemMap": itemMap}, "", "/checkout")
                                            location.href = "/checkout"
                                        } else {
                                            alert("Vui lòng chọn sản phẩm")
                                        }
                                    }}
                                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                                    type="button">Proceed Checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default CartPageComponent



