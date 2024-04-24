import axios from "axios";

export const ticket = async (vnp_PayDate) => {
    try {
        const res =await axios.get(`http://localhost:8080/api/ticket/${vnp_PayDate}`);
        return res.data;
    }catch (err) {
        console.log(err);
    }
}