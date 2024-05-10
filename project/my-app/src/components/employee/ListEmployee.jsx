import styles from "./style.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {deleteById, findAll} from "../../service/EmployeeService";
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
    return (
        <>
            <div className={styles.list}>
                <div
                    className="container all border border-dark p-3 rounded-4 table-wrapper"
                    style={{marginTop: 50}}
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
                                    <div className={styles.iconShow}><img
                                        src="data:image/gif;base64,R0lGODlhtAC0AKIHAP/05P8TGxEOEOGaff9yDv/lyv///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDFEMzIyQUM0RTMxMUVBOEUxOEFGNDc5QUJBRDE4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MDFEMzIyQkM0RTMxMUVBOEUxOEFGNDc5QUJBRDE4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwMUQzMjI4QzRFMzExRUE4RTE4QUY0NzlBQkFEMThFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQwMUQzMjI5QzRFMzExRUE4RTE4QUY0NzlBQkFEMThFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/O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"
                                        alt="" width="100px" height="100px"/><p>Hông có . . .</p>
                                    </div> : employeeList.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item[0].employeeIden}</td>
                                            <td>{item[0].fullname}</td>
                                            <td>{item[0].idCard}</td>
                                            <td>{item[0].email}</td>
                                            <td>{item[0].phone}</td>
                                            <td>{item[0].address}</td>
                                            <td>
                                                <div
                                                    className={`${styles.cellWithStatus} ${item[1] ? styles.active : styles.passive}`}>{item[1] ? 'Active' : 'Passive'}</div>
                                            </td>
                                            <td>
                                                <NavLink to={`/employee`}>
                                                    <i className="far fa-pen-to-square"></i>
                                                </NavLink>
                                            </td>
                                            <td><input type="checkbox"
                                                       onChange={() => selectItemToDe(item[0].employeeId, item[0].fullname)}
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
            </div>
        </>)

}

export default ListEmployee;
