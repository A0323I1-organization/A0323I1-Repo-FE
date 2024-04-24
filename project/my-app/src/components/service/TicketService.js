import axios from "axios";
export  const findAllTicket =  async () =>{
    try {
        const  temp = await axios.get("http://localhost:8080/api/ticket/findAllTicket");
        return temp.data;
    }catch (e) {
        console.log(e)
    }
}