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

export const findAllMovie = async () => {
    try {
        let temp = await axios.get("http://localhost:8080/api");
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};

export const findAllMovieByMovieName = async (nameMovie) => {
    try {
        let temp = await axios.get(
            `http://localhost:8080/api/search?name=${nameMovie}`
        );
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};

export const findAllMovieIsShowing = async () => {
    try {
        let temp = await axios.get("http://localhost:8080/api/showing");
        console.log(temp.data)
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};

export const findAllUpcomingMovie = async () => {
    try {
        let temp = await axios.get("http://localhost:8080/api/upcoming");
        console.log(temp);
        return temp.data;
    } catch (e) {
        console.log(e);
    }
};