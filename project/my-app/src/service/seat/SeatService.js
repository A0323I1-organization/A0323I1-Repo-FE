import axios from "axios";

export const getAllSeat = async (showDate, showTime, movieId) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/seat/${showDate}/${showTime}/${movieId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const bookSeat = async (seatsId)=> {
    try{
         await axios.post(`http://localhost:8080/api/book-seat/${seatsId}`)
        return true
    }catch (err) {
        console.log(err);
    }
}

export const getSeatById = async (seatIds) => {
    try {
        const encodedItems = encodeURIComponent(JSON.stringify(seatIds));
        const res = await axios.get(`http://localhost:8080/api/get-seat-by-id?listId=${encodedItems}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}