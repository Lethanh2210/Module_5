import {useState} from "react"

function Calculator (){
    const [result, setResult] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');



    const calculated = (cal) =>{
        let result = eval(firstNumber + cal + secondNumber)
        setResult(result);
    }

    return (
            <div>
                    <input type="text"  onChange={e => setFirstNumber(e.target.value)}/>
                    <br/>
                    <input type="text"  onChange={e => setSecondNumber(e.target.value)}/>
                    <h3>Result: {result}</h3>
                    <button onClick={() => calculated("+")}>+</button>
                    <button onClick={() => calculated("-")}>-</button>
                    <button onClick={() => calculated("*")}>X</button>
                    <button onClick={() => calculated("/")}>%</button>
            </div>
        )

}

export default Calculator;


