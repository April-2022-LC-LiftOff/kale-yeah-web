import './login.css'
import React, { useState } from "react";

const Login = () => {

    const [state, setState] = useState("true");


    const registerForm = (
        <form id="Regform">
            <h1 className="ky">Kale Yeah!</h1>
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Email" required />
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" required />
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="Password" required />
            <button type="submit" className="btn">
                Register
            </button>
        </form>
    );

    const loginForm = (
        <form id="loginform">
            <h1 className="ky">Kale Yeah!</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" autoComplete="username" id="username" required />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" autoComplete="current-password" id="current-password" required />
            <button id="button" type="submit" className="btn">
                Login
            </button>
            <a href="#">Forgot password?</a>
        </form>
    );

    return(
        <div className="form-container">
                    <div className="form-btn">
                        <button id="login" onClick={()=>setState(false)}>Login</button>
                        <button id="register" onClick={()=>setState(true)}>Register</button>
                        {state ? registerForm : loginForm}
                    </div>
                </div>
    )



}

export default Login;