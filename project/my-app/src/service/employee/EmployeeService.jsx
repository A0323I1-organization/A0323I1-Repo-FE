import axios from "axios";
export const findAll = async (sort,fullname,phone,page) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/employee?page=${page}&fullname=${fullname}&phone=${phone}&sort=${sort}`);
        return response.data

    } catch (error) {
        return error;
    }
}
export const deleteById = async(ids) =>{
    try{
        await axios.delete(`http://localhost:8080/api/employee/${ids}`);
    }catch(error){
        return error;
    }
}
export const selectById = async(id)=>{
   try{
       const response = await axios.get(`http://localhost:8080/api/employee/${id}`)
       return response.data
   }catch(error){
       return error;
   }
}
