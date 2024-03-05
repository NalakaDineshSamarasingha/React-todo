import React from "react";
import './LoginSignUp.css';

const LoginSignUp = () => {
    return(
        <div className="login-page-container">
            <div className="login">
                <h1>Welcome Back</h1>
                <div className="container">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Your Username" />
                </div>
                <div className="container">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Your Password" />
                </div>
                
                <p className="save"><input type="checkbox" name="Remember me " id="save" />Remember me</p>
                <button type="Submit">Login</button>
                <p className="forgot">Forgot Password</p>
                <p className="account">Don't have an account</p>
            </div>
        </div>
    )
}

export default LoginSignUp;