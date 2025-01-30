import ModalComponent from "./ModalComponent"

interface Props {
    title: any
    body: any
    id: any
    nameButton?: any
    className?: any

}
function ButtonModalComponent(props: Props) {
    return (
        <div>
            <button type="button" className={props.className ? props.className : "btn btn-primary"} data-toggle="modal" data-target={"#" + props.id}>
                {props.nameButton}
            </button>

            <ModalComponent
                body={props.body}
                id={props.id}
                title={props.title}
            />
        </div>
    )
}
export default ButtonModalComponent