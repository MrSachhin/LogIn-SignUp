import { useState } from 'react';
import './LoginSignup.css';
const LoginSignup = () =>{
    const [action, setAction] = useState("Sign Up");
    return(
        <>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
        
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <input type = 'text' placeholder='name'></input>
                </div>}
                <div className="input">
                    <input type = 'email' placeholder = 'email'></input>
                </div>
                <div className="input">
                    <input type = 'password' placeholder = 'password'></input>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgotten">Forgot password? <span className="click">Click Here</span></div>}
            <div className="button"><button className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</button>
            <button className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button></div>
        </div>
        </>
    )
}
export default LoginSignup;