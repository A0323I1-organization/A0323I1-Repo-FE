import React from "react";
import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


const RegisterForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
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

                <button className="submit">Register</button>

                <div className="register-link">
                    <p>Have an account ?
                        <a href="#">Login</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;
