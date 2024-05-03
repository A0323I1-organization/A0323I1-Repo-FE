import axios from "axios";

export const getMovieById =async (movieId) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/get-movie-by-id/${movieId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const getAllMovieIsShowing = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/get-all-movie-is-showing");
        return res.data;
    } catch (err) {
        console.log(err);
    }
}