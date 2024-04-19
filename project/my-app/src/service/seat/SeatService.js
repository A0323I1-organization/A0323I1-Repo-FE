import axios from "axios";

export const getAllSeat = async (date, time, movieId) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/seat/${date}/${time}/${movieId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }

}