import React, {useEffect, useState,} from "react";
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt,} from "react-icons/fa";
import {Link} from "react-router-dom";
import {Search} from "../common/Search";

const CustomerView = () => {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        const result = await axios.get(
            "http://localhost:8081/customers",
            {
                validateStatus: () => {
                    return true;
                },
            }
        );
        if (result.status === 302) {
            setCustomers(result.data);
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(
            `http://localhost:8081/customers/delete/${id}`
        );
        loadCustomers();
    };

    return (
        <section>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <table className="table table-bordered table-hover shadow">
                <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Id Card</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th colSpan="3">Actions</th>
                </tr>
                </thead>

                <tbody className="text-center">
                {customers.filter((st) => st.firstName.toLowerCase().includes(search))
                    .map((customer, index) => (
                        <tr key={customer.id}>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{customer.firstName}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.idCard}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.address}</td>
                            <td className="mx-2">
                                <Link
                                    to={`/customer-profile/${customer.id}`}
                                    className="btn btn-info">
                                    <FaEye/>
                                </Link>
                            </td>
                            <td className="mx-2">
                                <Link
                                    to={`/edit-customer/${customer.id}`}
                                    className="btn btn-warning">
                                    <FaEdit/>
                                </Link>
                            </td>
                            <td className="mx-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDelete(customer.id)
                                    }>
                                    <FaTrashAlt/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default CustomerView;
