import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import * as customerService from "../service/CustomerService";

export function EditCustomer() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [customer, setCustomer] = useState(null); // Initialize as null

    const validationCustomer = Yup.object().shape({
        name: Yup.string()
            .required("** Name không được để trống"),
        age: Yup.number()
            .required("** Age không được để trống")
            .min(0, "Age không được nhỏ hơn 0 tuổi")
            .max(200, "** Tuổi không được quá 200 tuổi"),
        address: Yup.string()
            .required("** Address không được để trống"),
        classroom: Yup.string().required("** Class Room không được để trống"),
        gender: Yup.string().required("** Gender khong duoc de trong")
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const customerDetail = await customerService.getById(id);
                if (customerDetail) {
                    setCustomer(customerDetail);
                }
            } catch (error) {
                console.log("Lỗi khi lấy thông tin: ", error);
            }
        }

        fetchData();
    }, [id]);

    const updateCustomer = async (values) => {
        try {
            await customerService.update(id, values);
            toast.success("Cập nhật thông tin thành công !");
            navigate("/student");
        } catch (error) {
            console.error("Lỗi cập nhật thông tin khach hang: ", error);
            toast.error("Đã có lỗi xảy ra khi cập nhật thông tin khach hang");
        }
    }

    return (
        <Formik initialValues={customer} onSubmit={updateCustomer} validationSchema={validationCustomer}>
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

                <button type="submit">Update</button>
            </Form>
        </Formik>
    )
}