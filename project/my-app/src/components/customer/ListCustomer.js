import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deburr } from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import * as customerService from "../service/CustomerService";

function CustomerList(props) {
    const [customers, setCustomer] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        const temp = await customerService.getAll();
        setCustomer(temp);
    }

    const deleteCustomer = async (id) => {
        try {
            await customerService.remove(id);
            setCustomer(customers.filter(customer => customer.id !== id));
            alert("Xóa khách hàng thành công");
        } catch (error) {
            alert("Lỗi không thể xóa khách hàng: " + error);
        }
    }

    // Hàm để lọc danh sách khach hang dựa trên giá trị tìm kiếm
    const filteredCustomer = customers.filter(customer => {
        const normalizedSearchTerm = deburr(searchTerm.toLowerCase()); // Loại bỏ dấu và chuyển thành chữ thường
        const normalizedName = deburr(customer.name.toLowerCase()); // Loại bỏ dấu và chuyển thành chữ thường
        return normalizedName.includes(normalizedSearchTerm);
    });

    return (
        <>
            <h1 style={{color: "navy", textAlign: "center"}}>Danh sách khách hàng {props.className}</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search...."
                    className="prompt"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{WebkitBorderRadius: "15px", width: "30%", float: "right"}}
                />
            </div>

            <button type="button" className="btn btn-outline-primary" style={{float: "left"}}>
                <Link to="/customer/create">Create</Link>
            </button>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Birthday</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Identity Card</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredCustomer.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.fullname}</td>
                        <td>{item.birthday}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.identity_card}</td>
                        <td>{item.gender}</td>
                        <td>
                            <button type="button" className="btn btn-outline-primary">
                                <Link to={`/customer/update/${item.id}`}>Edit</Link>
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-outline-primary"
                                    onClick={() => deleteCustomer(item.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default CustomerList;