import axios from "axios";

export const payment = async (total, listId) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/pay/${total}?listId=${listId}`);
        return res.data.url;
    } catch (err) {
        console.log(err);
    }
}