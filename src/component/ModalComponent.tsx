interface Props {
    title: string
    body: any
    id: any

}
function ModalComponent(props: Props) {
    return (
        <div className="modal fade " id={props.id} tabIndex={-1} role="dialog" aria-labelledby={props.id + "label"} aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id + "label"}>{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.body}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ModalComponent