class T {
    label?: string
    type?: string
}
export interface FormProps {
    list: Array<T>
    func: any
}
function FormInputComponent(props: FormProps) {
    return <form>
        {props.list.map(prop => {
            return (
                <div className="form-group">
                    <label >{prop.label}</label>
                    <input type={prop.type}
                     onChange={props.func}
                     className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp" 
                     placeholder="Enter email"/>
                </div>
            )
        })}
    </form>
}
export default FormInputComponent