function Alert(props){
    return (
        <div className="alert alert-warning" role="alert">
            <p>{props.text}</p>
        </div>
    )
}

export default Alert;