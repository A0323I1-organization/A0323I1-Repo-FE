import {useParams} from "react-router";
import {useEffect, useState} from "react";
import styles from '../employee/style.module.scss';
import {selectById} from "../../service/employee/EmployeeService";
function DetailEmployee(props){
    const{id} = useParams();
    const [employee, setEmployee]= useState()
    useEffect(()=>{
        getEmployee(id).then();
        }

    )
    const getEmployee = async()=>{
        const temp = await selectById(id);
        setEmployee(temp);
    }
    if(!employee) return null;
    return(
        <>
            <div className={styles.detail}>
                <div className={styles.employeeTitleContainer}>
                    <h1 className={styles.employeeTitle}>Chi tiết nhân viên</h1>
                </div>
                <div className={styles.employeeContainer}>
                    <div className={styles.employeeShow}>
                        <div className={styles.employeeShowTop}></div>
                    </div>

                </div>
            </div>

        </>
    )

}
export default DetailEmployee;
