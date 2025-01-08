import ModalComponent from "./ModalComponent"

interface Props {
    title: string
    body: any
    id: any
    nameButton: string

}
function ButtonModalComponent(props: Props) {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#" + props.id}>
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