import './Login.css'
import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context';

const Login = () => {

    const [registration, setRegistration] = useState("true");

    const [email, setEmail] = useState("");
    const {regUsername, setRegUsername} = useContext(Context);
    const [regPwd, setRegPwd] = useState("");

    const [logUsername, setLogUsername] = useState("");
    const [logPwd, setLogPwd] = useState("");

    const redirect = useNavigate();

    const handleRegSubmit = async (e) => {
        e.preventDefault();
        const regUser = {
            email: email,
            username: regUsername,
            password: regPwd
        }
        try {
            const response = await axios.post('http://localhost:8080/registration',
                 regUser,
                { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
                             })
            if (response.status === 200) {
                window.localStorage.setItem('Username', regUsername);
                redirect(`/profile/${regUsername}`)
            } 
        }
        catch (error) {
            if (error) {
                setEmail("")
                setRegUsername("")
                setRegPwd("")
        }
        console.log(error)
    }
}

    const handleLogSubmit = async (e) => {
        e.preventDefault();
        const logUser = {
            username: logUsername,
            password: logPwd
        }
        try {
            const response = await axios.post('http://localhost:8080/login',
                logUser,
                { headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin' : '*' } })
            console.log(response)
            if (response.status === 200) {
                redirect(`/profile/${logUsername}`)
            }    

        }
        catch (error) {
            if (error) {
                setLogUsername("")
                setLogPwd("")
            }
            console.log(error)
        }
    }

    const registerForm = (
        <form onSubmit={handleRegSubmit} id="Regform">
            <h1 className="ky">Kale Yeah!</h1>
            <label htmlFor="Email">Email</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            <label htmlFor="username">Username</label>
            <input
                type="text"
                placeholder="Username"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                required />
            <label htmlFor="Password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={regPwd}
                onChange={(e) => setRegPwd(e.target.value)}
                required />
            <button type="submit" className="btn">
                Register
            </button>
        </form>
    );

    const loginForm = (
        <form onSubmit={handleLogSubmit} id="loginform">
            <h1 className="ky">Kale Yeah!</h1>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={logUsername}
                onChange={(e) => setLogUsername(e.target.value)}
                autoComplete="username"
                id="username"
                required />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Password"
                value={logPwd}
                onChange={(e) => setLogPwd(e.target.value)}
                autoComplete="current-password"
                id="current-password"
                required />
            <button id="button" type="submit" className="btn">
                Login
            </button>
            <a href="#">Forgot password?</a>
        </form>

       
    );

    return (
        <div className="form-container">
            <div className="form-btn">
                <button id="login" onClick={() => setRegistration(false)}>Login</button>
                <button id="register" onClick={() => setRegistration(true)}>Register</button>
                {registration ? registerForm : loginForm}
            </div>
        </div>
    )



}

export default Login;