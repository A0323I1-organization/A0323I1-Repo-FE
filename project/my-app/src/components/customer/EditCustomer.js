import React, {useEffect, useState,} from "react";
import axios from "axios";
import {Link, useNavigate, useParams,} from "react-router-dom";

const EditCustomer = () => {
    let navigate = useNavigate();
    const { id } = useParams();

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

    useEffect(() => {
        loadCustomer().then(r =>{} );
    }, []);

    const loadCustomer = async () => {
        const result = await axios.get(
            `http://localhost:8081/customers/customer/${id}`
        );
        setCustomer(result.data);
    };

    const handleInputChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const updateCustomer = async (e) => {
        e.preventDefault();
        await axios.put(
            `http://localhost:8081/customers/customer/${id}`,
            customer
        );
        navigate("/view-customers");
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Edit Customer</h2>
            <form onSubmit={(e) => updateCustomer(e)}>
                {/*First Name*/}
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="fristName">
                        First Name
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
                        Birthday
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
                        Id Card
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
                        Phone
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
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
                        Address
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={address}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>


                <div className="row mb-5">
                    {/*Button Save*/}
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg">
                            Save
                        </button>
                    </div>

                    {/*Button Cancel*/}
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

export default EditCustomer;
