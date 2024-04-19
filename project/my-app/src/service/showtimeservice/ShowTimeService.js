import axios from "axios";

export const findAllShowDateByMovieId = async  (movieId) => {
    try {
    const res = await axios.get(`http://localhost:8080/api/find-all-show-date/${movieId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const findAllShowTime = async (date) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/find-all-show-time/${date}`)
        return res.data;
    } catch (err) {
        console.log(err);
    }
}