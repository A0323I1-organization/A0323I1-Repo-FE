import axios from "axios";

export const getMovieById =async (movieId) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/get-movie-by-id/${movieId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}