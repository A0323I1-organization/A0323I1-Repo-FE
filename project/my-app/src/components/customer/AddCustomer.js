import { useState } from "react";
import {Link, useNavigate,} from "react-router-dom";
import axios from "axios";

const AddCustomer = () => {
    let navigate = useNavigate();
    const [customer, setCustomer] = useState({
        firstName: "",
        birthday: "",
        gender: "",
        idCard: "",
        email: "",
        phone: "",
        address: "",
    });
    const {
        firstName,
        birthday,
        gender,
        idCard,
        email,
        phone,
        address,
    } = customer;

    const handleInputChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };
    const saveCustomer = async (e) => {
        e.preventDefault();
        await axios.post(
            "http://localhost:8081/customers",
            customer
        );
        navigate("/view-customer");
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Add Customer</h2>
            <form onSubmit={(e) => saveCustomer(e)}>
                {/*First Name*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="fristName">
                        Your First Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                {/*Birthday*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="birthday">
                        Your Birthday
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="date"
                        name="birthday"
                        id="birthday"
                        required
                        value={birthday}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                {/*Gender*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="gender">
                        Gender
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="radio"
                        name="gender"
                        id="gender"
                        required
                        value={gender}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                {/*Id Card*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="idCard">
                        Gender
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="idCard"
                        id="idCard"
                        required
                        value={idCard}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                {/*Email*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="email">
                        Your Email
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                {/*Phone*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="phone">
                        Your Phone
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="phone"
                        name="phone"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                {/*Address*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="address">
                        Your Address
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="address"
                        name="address"
                        id="address"
                        required
                        value={address}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg">
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={"/view-customers"}
                            type="submit"
                            className="btn btn-outline-warning btn-lg">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCustomer;
