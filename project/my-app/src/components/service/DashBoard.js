import axios from "axios";
export  const findAllMovieSales =  async () =>{
    try {
        const  temp = await axios.get("http://localhost:8080/api/movie-sale");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export  const findAllTopCustomer =  async () =>{
    try {
        const  temp = await axios.get("http://localhost:8080/api/top-customer");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export  const findAllTopMovieType =  async () =>{
    try {
        const  temp = await axios.get("http://localhost:8080/api/top-movie-type");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export  const findAllTopShowTime =  async () =>{
    try {
        const  temp = await axios.get("http://localhost:8080/api/top-show-time");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}