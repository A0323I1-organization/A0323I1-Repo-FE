import React from "react";
import { useHistory } from "react-router-dom"; // Import thư viện useHistory từ react-router-dom
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import icon_login from '../../assets/img/icon_login.jpg';

const LoginForm = () => {
    const history = useHistory(); // Khởi tạo useHistory
    const handleRegisterClick = () => {
        history.push("/new-registration-path"); // Điều hướng người dùng đến đường dẫn mới khi click vào link đăng ký
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login Form</h1>
                <div className='img-user'>
                    <img src={icon_login} alt="Login Icon"/>
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
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </label>
                </div>

                <button className="submit">
                    <p>Login</p>
                </button>

                <div className="register-link">
                    <p>Don't have an account ?
                        <button onClick={handleRegisterClick}>Register</button>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
