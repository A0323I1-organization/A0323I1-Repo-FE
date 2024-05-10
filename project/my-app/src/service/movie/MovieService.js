import axios from "axios";

export const findAllMovie = async () => {
  try {
    let temp = await axios.get("http://localhost:8080/api/movie");
    return temp.data;
  } catch (e) {
    console.log(e);
  }
};

export const findAllMovieByMovieName = async (nameMovie) => {
  try {
    let temp = await axios.get(
      `http://localhost:8080/api/movie/search?name=${nameMovie}`
    );
    return temp.data;
  } catch (e) {
    console.log(e);
  }
};

export const findAllMovieIsShowing = async () => {
  try {
    let temp = await axios.get("http://localhost:8080/api/movie/showing");
    return temp.data;
  } catch (e) {
    console.log(e);
  }
};

export const findAllUpcomingMovie = async () => {
  try {
    let temp = await axios.get("http://localhost:8080/api/movie/upcoming");
    return temp.data;
  } catch (e) {
    console.log(e);
  }
};
