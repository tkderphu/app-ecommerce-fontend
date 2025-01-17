import { Request } from "../../../common/api.call"
import { AppPageCouponReqVO } from "../record/record.req.vo"

const PATH = '/promotion/coupons'
class CouponService {
    getPageCouponByUser(req: AppPageCouponReqVO) {
        return Request.call(PATH +"/user", "post", req)
    }
}
export default new CouponService()