import {useState} from "react";

function CountNumber(){
    const [counter, setCounter] = useState(1);
    const [color, setColor] = useState(0);
    const [colors, setColors] = useState(['pink', 'orange','green','yellow']);
    const [status, setStatus] = useState(true);

    const increase = ()=>{
        setCounter(prevState => prevState + 1)
    }
    const decrease = ()=>{
        setCounter(prevState => prevState - 1)
    }



    // const componentDidMount = ()=>{
    //     setInterval(() => {
    //         setColor('yellow');
    //
    //     },2000)
    //     componentDidMount2();
    // }
    //
    // const componentDidMount2 = ()=>{
    //     setInterval(() => {
    //         setColor('pink');
    //         componentDidMount()
    //     },4000)
    // }
    //
    // componentDidMount();

    const show = ()=>{
        setStatus(!status);
    }

    return (
        <div style={{backgroundColor : colors[color]}}>
            {status ? <h1>{counter}</h1> : <h1>FUCK</h1>}
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <br/>
            <button onClick={show}>Show/Hide</button>

        </div>
    )
}

export default CountNumber;