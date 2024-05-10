import axios from "axios";

export const getAll = async () => {
    try{
        const response = await axios.get(`http://localhost:8081/customers`);
        return response.data;
    } catch (error){
        console.log(error);
        throw error;
    }
}

export const add = async (customer) => {
    try {
        const response = await axios.post(`http://localhost:8081/customers`, customer);
        return response.data;
    } catch (error){
        console.log(error);
        throw error;
    }
}

export const update = async (id, updateCustomer) => {
    try {
        const response = await axios.put(`http://localhost:8081/customer/${id}`, updateCustomer);
        return response.data
    }catch (error){
        console.log(error);
        throw error;
    }
}

export const remove = async (id) =>{

    try {
        const response = await axios.delete(`http://localhost:8081/customer/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8081/customers/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}