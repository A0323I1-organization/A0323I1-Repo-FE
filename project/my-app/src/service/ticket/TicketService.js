import axios from "axios";

export const ticket = async (vnp_PayDate) => {
    try {
        const res =await axios.get(`http://localhost:8080/api/ticket/${vnp_PayDate}`);
        return res.data;
    }catch (err) {
        console.log(err);
    }

    export  const findAllTicket =  async () =>{
        try {
        const  temp = await axios.get("http://localhost:8080/api/ticket/findAllTicket");
        return temp.data;
        }catch (e) {
        console.log(e)
        }
}
export const exportPdf = async (id) => {
    try {
        const  response = await axios.get(`http://localhost:8080/api/ticket/exportPdf/${id}`,{ responseType: 'blob' });
        //1.responseType: Đây là thuộc tính trong cấu hình yêu cầu của Axios và được sử dụng để xác định kiểu dữ liệu của phản hồi mà bạn muốn nhận
        //2.'blob': Đây là một giá trị chuỗi đặc biệt cho responseType, chỉ định rằng bạn mong đợi dữ liệu phản hồi được trả về dưới dạng đối tượng Blob.
        //Đối tượng Blob đại diện cho một khối dữ liệu không có định dạng cụ thể và thường được sử dụng cho việc xử lý các loại dữ liệu như tệp, ảnh, hoặc âm thanh.
        const  url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ticket.pdf');
        //thêm link vào body của trang web. điều này là cần thiết để liên kết xuất hiện trong DOM và cso thể tương tác dc.
        document.body.appendChild(link);
        //kích hoạt sự kiện click để tiến hành tải tệp PDF.
        link.click();
        console.log("success")
    }catch (e) {
        console.log(e);
    }
}

export  const searchForStartAndEndDates = async (startDate,endDate,page) => {
        try {
            const  temp = await axios.get(`http://localhost:8080/api/ticket/searchForStartAndEndDates/${page - 1}?startDate=${startDate}&endDate=${endDate}`);
            return temp.data;

        }catch (e) {
            console.log(e);
        }
}

export const findAllTicketPage = async (page) => {
        try {
            const temp = await axios.get(`http://localhost:8080/api/ticket/findAllTicketPage/${page - 1} `)

            return temp.data;

        }catch (e) {
            console.log(e);
        }

}