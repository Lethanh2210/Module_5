import {useState} from "react";

function Login(){
    const [button, setButton] = useState(true);

    const enter = () => {
        setButton(!button);
    }

    return (
        <div className="container" style={{textAlign: 'center'}}>
            {button ? <h1>Please Login</h1> : <h1>Welcome</h1>}
            {button ? <button onClick={enter}>log In</button> : <button onClick={enter}>log Out</button>}
        </div>
    )
}

export default Login;