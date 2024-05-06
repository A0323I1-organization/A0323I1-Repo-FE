import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState, useEffect} from "react";
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import * as studentService from "../Service/CustomerService";

function CreateStudent() {
    const navigate = useNavigate();
    const [classroom, setClassroom] = useState();
    const student = {
        customer_id: "",
        fullname: "",
        birthday: "",
        gender: "",
        identity_card: "",
        email: "",
        address: "",
        phone: "",
        customer_account_id: "",
        point: "",
        customer_image: ""
    }

    const validationCustomer = Yup.object().shape({
        fullname: Yup.string()
            .required("** Name không được để trống"),
        birthday: Yup.string()
            .required("** Birthday không được để trống"),
        address: Yup.string()
            .required("** Address không được để trống"),
        identity_card: Yup.string()
            .required("** Identity_card không được để trống"),
        email: Yup.string()
            .required("** Email không được để trống"),
        phone: Yup.string()
            .required("** Phone không được để trống"),
        gender: Yup.string()
            .required("** Gender không được để trống")
    });

    const addNewCustomer = async (value) => {
        try {
            console.log(value);
            value.id = +value.id;
            value.fullname = value.fullname;
            value.birthday = value.birthday;
            value.address = value.address;
            value.identity_card = value.identity_card;
            value.email = value.email;
            value.phone = value.phone;
            value.gender = value.gender;
            await studentService.add(value);
            toast.success("Them moi thanh cong !");
            navigate("/customer");
        } catch (error) {
            console.log("Loi them moi khach hang : ", error);
            toast.error("Da co loi xay ra khi them moi khach hang")
        }
    }

    return (
        <>
            <Formik initialValues={student} onSubmit={addNewCustomer} validationSchema={validationCustomer}>
                <Form>
                    Name: <Field name="name"/>
                    <ErrorMessage name="id" component="p"/>
                    Birthday: <Field name="age"/>
                    <ErrorMessage name="age" component="p"/>
                    Address: <Field name="address"/>
                    <ErrorMessage name="address" component="p"/>
                    Identity_card: <Field name="address"/>
                    <ErrorMessage name="address" component="p"/>
                    Email: <Field name="address"/>
                    <ErrorMessage name="address" component="p"/>
                    Phone: <Field name="address"/>
                    <ErrorMessage name="address" component="p"/>
                    Gender: <Field name="gender"/>
                    <ErrorMessage name="gender" component="p"/>
                    <br></br>

                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateStudent;