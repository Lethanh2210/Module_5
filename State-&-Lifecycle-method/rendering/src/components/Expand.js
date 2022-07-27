import {useState} from "react";

function Collapse(){
    const [show, setShow] = useState(true);

    const showInfo = () => {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={showInfo}>{show ? "xem gioi thieu" : "dong gioi thieu"}</button>
            {!show && <p>alo 1234</p>}
        </div>
    )
}

export default Collapse;