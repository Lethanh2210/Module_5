function AddComponent(props) {
    return (
        <div>
            <p>Function Component</p>
            <h1>Total: {props.firstNumber + props.secondNumber}</h1>
        </div>

    );
}

export default AddComponent;