import React from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import icon_login from '../../assets/img/icon_login.jpg'; // Adjusted import path

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login Form</h1>
                <div className='img-user'>
                    <img src={icon_login} alt="Login Icon"/> {/* Use the imported variable */}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter your username..." required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter your password..." required/>
                    <RiLockPasswordFill className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/> Remember me
                    </label>
                </div>

                <button className="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account ?
                        <a href="#">Register</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
