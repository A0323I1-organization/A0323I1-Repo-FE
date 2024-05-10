import React from "react";
import './RegisterForm.css';
import { FaUser,FaHome ,FaPhone,FaAddressCard,FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const RegisterForm = () => {
    // Hàm xử lý khi form được gửi
    const handleSubmit = (event) => {
        // Ngăn chặn hành vi mặc định của form (không gửi form)
        event.preventDefault();
        // Chuyển hướng đến đường dẫn /admin-page
        window.location.href = "/admin-page";
    };

    return (
        <div className='wrapper'>
            {/* Thêm sự kiện onSubmit vào thẻ <form> */}
            <form onSubmit={handleSubmit}>
                <h1>Register Form</h1>

                <div className="input-box">
                    <input type="text" placeholder="Enter your fullname..." required/>
                    <FaUserCircle className='icon'/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Enter your username..." required/>
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Enter your password..." required/>
                    <RiLockPasswordFill className='icon'/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm your password..." required/>
                    <RiLockPasswordFill className='icon'/>
                </div>

                <div className="input-box birthday-input-box">
                    <input type="date" required/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Enter your address..." required/>
                    <FaHome className='icon'/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Enter your email..." required/>
                    <MdEmail className='icon'/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Enter your phone..." required/>
                    <FaPhone className='icon'/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Enter your identity card..." required/>
                    <FaAddressCard className='icon'/>
                </div>

                <div className="gender">
                    <span>Gender: </span>
                    <label>
                        <input type="radio" name="gender" value="male" required/> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" required/> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" required/> Other
                    </label>
                </div>
                <br/><br/>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/> Remember me
                    </label>
                </div>

                {/* Thay đổi thành button type="submit" */}
                <button type="submit" className="submit">Register</button>

                <div className="register-link">
                    <p>Have an account ? Register</p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
