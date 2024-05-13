import axios from "axios";
export  const findAllTopCustomer =  async () =>{
    try {
        const  temp = await axios.get("http://localhost:8080/api/top-customer");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export const findAllMovieSaleDate = async (filterDate) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/movie-sale-date?filterDate=${filterDate}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
};
export const findAllTopCustomerDate = async (filterDate) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/top-customer-date?filterDate=${filterDate}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
};
export const findAllTopMovieTypeDate = async (filterDate) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/top-movie-type-date?filterDate=${filterDate}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
};
export const findAllTopShowTimeDate = async (filterDate) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/top-show-time-date?filterDate=${filterDate}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
};
export const findAllMovieSalePaging = async (pageNo,pageSize,sortBy,sortDirection) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/movie-sale?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
};
export  const findAllTopCustomerPaging =  async (pageNo,pageSize,sortBy) =>{
    try {
        const  temp = await axios.get(`http://localhost:8080/api/top-customer?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`);
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export  const findAllTopMovieTypePaging =  async (pageNo,pageSize,sortBy,sortDirection) =>{
    try {
        const  temp = await axios.get(`http://localhost:8080/api/top-movie-type?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`);
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}
export  const findAllTopShowTimePaging =  async (pageNo,pageSize,sortBy,sortDirection) =>{
    try {
        const  temp = await axios.get(`http://localhost:8080/api/top-show-time?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`);
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}