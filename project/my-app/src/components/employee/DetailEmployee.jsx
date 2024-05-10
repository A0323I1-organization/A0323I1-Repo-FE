import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import{selectById} from "../../service/EmployeeService"


function DetailEmployee(props){
    const{id}= useParams();
    const[employee, setEmployee] = useState([]);
    useEffect(() => {
        getEmployeeById().then();
    },id );
    const getEmployeeById = async()=>{
        let temp = await selectById(id);
        setEmployee(temp);
    }
    return(
        <>

        </>
    )
}

export default DetailEmployee;
