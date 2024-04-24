import styles from '../employee/style.module.scss';
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {findAll} from "../../service/EmployeeService";
import {deleteById} from "../../service/EmployeeService"
import '@fortawesome/fontawesome-free/css/all.css';
import 'sweetalert2/dist/sweetalert2.css';
import Swal from "sweetalert2";
import {Pagination} from "@mui/material";


function ListEmployee(props) {
    const [employeeList, setEmployeeList] = useState([]);
    const [sort, setSort] = useState(" ");
    const [keySearch, setKeySearch] = useState({
        name: "", phone: "", reference: ""

    })
    const [myArr, setMyArr] = useState([]);
    const [myArrName, setMyArrName] = useState([]);
    const [page, setPage] = useState({
        pageCurrent: 0, pageCount: ""
    })
    const handleChange = async (event, value) => {
        setPage({...page, pageCurrent: value});
        let temp = await findAll(sort, keySearch.name, keySearch.phone, page.pageCurrent - 1);
        setEmployeeList(temp.content);
    };

    useEffect(() => {
        getAllList().then();
    }, [sort, keySearch, page.pageCurrent]);

    const getAllList = async () => {
        let temp;
        if (keySearch.name !== "") {
            if (keySearch.reference === "phone") {
                temp = await findAll(sort, "", keySearch.name, page.pageCurrent - 1);
            } else {
                temp = await findAll(sort, keySearch.name, keySearch.phone, page.pageCurrent - 1);
            }
        } else {
            temp = await findAll(sort, keySearch.name, keySearch.phone, page.pageCurrent - 1);
        }
        setEmployeeList(temp.content)
        setPage({...page, pageCount: temp.totalPages});
    }

    const selectItemToDe = async (id, name) => {
        let arr = [];
        let arrName = [];
        if (id !== "") {
            if (!myArr.includes(id)) {
                setMyArr([...myArr, id]);
                setMyArrName([...myArrName, name]);
            } else {
                arr = myArr.filter(item => item !== id);
                arrName = myArrName.filter(item => item !== name)
                setMyArrName(arrName);
                setMyArr(arr);
            }
        } else {
            if (myArr.length !== 0) {
                Swal.fire({
                    title: "Xóa Nhân Viên?",
                    text: "Xóa các nhân viên sau:   " + myArrName.join(','),
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Xóa!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        handleDetele(myArr)
                        Swal.fire({
                            title: "Đã xóa!", text: "Nhan viên đã được xóa.", icon: "success"
                        });
                    }
                });

            } else {
                await Swal.fire({
                    icon: "error", title: "Oops...", text: "Chọn Nhân Viên Cần Xóa!",
                });
            }
        }
    }
    const handleDetele = async (myArr) => {
        await deleteById(myArr.join(','))
        await getAllList();
    }

    if (!employeeList) return null;
    return (<>
            <>
                <div
                    className="container border border-dark p-3 rounded-4 table-wrapper"
                    style={{marginTop: 20}}
                >
                    <div
                        className="table-caption"
                        style={{
                            fontSize: 30, paddingLeft: 18, marginTop: "-45px", backgroundColor: "white", width: 260
                        }}
                    >
                        Quản lí Nhân Viên
                    </div>
                    <form action="" className={styles.form}>
                        <div className={styles.searchInput}>
                            <input
                                type="text"
                                name="q"
                                className={styles.formSearch}
                                placeholder="Tìm Nhân Viên " onChange={(e) => {
                                setKeySearch({...keySearch, name: e.target.value});
                            }}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={22}
                                fill="currentColor"
                                className={styles.searchButton}
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            <select
                                className={`${styles.selectSearch} sort`}
                                aria-label="Default select example"
                                id="labelForSort"
                                onChange={(e) => {
                                    setKeySearch({...keySearch, reference: e.target.value})
                                }}
                            >
                                <option value="fullname">Tên Nhân Viên</option>
                                <option value="phone">Số điện thoại</option>
                            </select>
                        </div>
                        <div className={styles.searchInput}>
                            <label htmlFor="labelForSort">Sắp Xếp</label>
                            <select
                                className={`${styles.selectSearch} sort`}
                                aria-label="Default select example"
                                id="labelForSort"
                                onChange={(e) => {
                                    setSort(e.target.value);
                                }}
                            >
                                <option value="fullname">Tên Nhân Viên</option>
                                <option value="employeeIden">Mã Nhân Viên</option>
                            </select>
                        </div>
                    </form>
                    <div>
                        <div className={styles.recentOrder}>
                            <table>
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã Nhân Viên</th>
                                    <th>Tên Nhân Viên</th>
                                    <th>Số CCCD</th>
                                    <th>Email</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Địa Chỉ</th>
                                    <th>Trạng thái</th>
                                     <th colspan={3}>Hành dộng</th>
                                </tr>
                                </thead>
                                <tbody>

                                {employeeList.length === 0 ?
                                    <h1>không có kết quả</h1> : employeeList.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item[0].employeeIden}</td>
                                            <td>{item[0].fullname}</td>
                                            <td>{item[0].idCard}</td>
                                            <td>{item[0].email}</td>
                                            <td>{item[0].phone}</td>
                                            <td>{item[0].address}</td>
                                            <td>
                                                <div className={`${styles.cellWithStatus} ${item[1] ? styles.active : styles.passive}`} >{item[1] ? 'Active' : 'Passive'}</div></td>
                                            <td>
                                                <NavLink to={`/employee`}>
                                                    <i className="far fa-pen-to-square"></i>
                                                </NavLink>
                                            </td>
                                            <td><input type="checkbox"
                                                       onChange={() => selectItemToDe(item.employeeId, item.fullname)}
                                                       className="attrCheck"/></td>
                                            <td>
                                                <NavLink to={`/employee/detail/${item[0].employeeId}`}>
                                                    <i className="fa-solid fa-list"></i>
                                                </NavLink>
                                            </td>
                                        </tr>))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <nav aria-label="Page navigation example text-center">
                            <ul className="pagination">
                                <Pagination count={page.pageCount} page={page.pageCurrent} onChange={handleChange}/>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.customButton}>
                        <button type="button" className="btn btn-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-plus-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>
                            Thêm mới
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            role="button"
                            onClick={() => {
                                selectItemToDe("")
                            }}
                            id="delete"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-x-circle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                            Xóa Nhân Viên
                        </button>
                        <button type="button" className="btn btn-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-arrow-return-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                                />
                            </svg>
                            Trở về
                        </button>
                    </div>
                </div>
            </>

        </>)

}

export default ListEmployee;
