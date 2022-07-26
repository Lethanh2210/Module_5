import { Component } from 'react';
class AddComponent extends Component {
    render() {
        return (<div>
                    <p>Class Component</p>
                    <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>
                </div>)
    }
}
export default AddComponent;