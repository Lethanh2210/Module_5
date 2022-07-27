import Home from "./Home";
import {useState} from "react";

const account = {
    email: "kzxlmdtn888@gmail.com",
    password: "123"
}

function LoginHome(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = () => {
        if(email === account.email && password === account.password){
            setIsLoggedIn(true);
            setIsValid(true);
        }else {
            setIsValid(false);
        }
    }

    const handleLogOut = () => {
        setIsLoggedIn( false);
    }


        if (isLoggedIn) return (<Home onLogOut={handleLogOut} />)
        return (
            <div className="container d-flex align-items-center text-center">
                <div className="form-signin">
                    <form>
                        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={email}
                                   onChange={(e)=>{setEmail(e.target.value); setIsValid(true)}} style={{borderColor: isValid ? 'black' : 'red'}}/>
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input className="form-control password" type="password" name="password" placeholder="Password" value={password}
                                   onChange={(e)=>{setPassword(e.target.value)}} />
                            <label>Password</label>
                        </div>
                        {/*<div className="checkbox mb-3">*/}
                        {/*    <label>*/}
                        {/*        <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit} >Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </div>
            </div>
        )

}

export default LoginHome;