import * as ticketService from "../../service/ticket/TicketService";
import * as seatService from "../../service/seat/SeatService";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import "./DetailTicket.css"
import {getSeatById} from "../../service/seat/SeatService";

function DetailTicket() {
    const location = useLocation();
    const vnp_PayDate = new URLSearchParams(location.search).get("vnp_PayDate");
    const listSeatId = localStorage.getItem("listId");
    const [check, setCheck] = useState();
    const [ticket, setTicket] = useState();
    const [seats, setSeats] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        getTicket();
        getSeat();
    }, []);


    const getTicket = async () => {

        const ticket = await ticketService.ticket(vnp_PayDate);
        const dateObject = new Date(ticket.showDate);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        ticket.showDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
        setTicket(ticket);
    }

    const getSeat = async () => {
        const seats = await seatService.getSeatById(listSeatId);
        setSeats(seats);
        let price = 0;

        for (let i = 0; i < seats.length; i++) {
            price += seats[i].typeSeatPrice;
            console.log(price)
        }
        setTotal(price);
    }

    if (!ticket || !seats) {
        return null;
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="process">
                            <ul>
                                <li>
                                    <button style={{opacity: 0.4}}>Phim/Suất Chiếu</button>
                                </li>
                                <li>
                                    <button style={{opacity: 0.4}}>Chọn Ghế</button>
                                </li>
                                <li>
                                    <button style={{opacity: 0.4}}>Thanh Toán</button>
                                </li>
                                <li>
                                    <button style={{color: "blue", borderBottom: "1px solid blue"}}>Xác Nhận</button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <h2 style={{color: "rgb(21, 39, 241)"}}>THÔNG TIN ĐẶT VÉ</h2>
                        <table border="1">

                            <tr>
                                <td colSpan="2">THÔNG TIN PHIM</td>
                            </tr>
                            <tr>
                                <td>Phim</td>
                                <td>{ticket.movieName}</td>
                            </tr>
                            <tr>
                                <td>Ngày Chiếu:</td>
                                <td>{ticket.showDate}</td>
                            </tr>
                            <tr>
                                <td>Giờ Chiếu</td>
                                <td>{ticket.movieTime}</td>
                            </tr>
                            <tr>
                                <td>Ghế</td>
                                <td>
                                    {seats.map((item, index) => (
                                        <span>{item.seatName} </span>

                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td>Tổng Cộng</td>
                                <td>{total}</td>
                            </tr>
                            <tr>
                                <td>Thanh Toán</td>
                                <td>Đã thanh toán qua Paypal</td>
                            </tr>
                            <tr>
                                <td colSpan="2">THÔNG TIN KHÁCH HÀNG</td>

                            </tr>

                            <tr>
                                <td>Họ tên</td>
                                <td>{ticket.fullname}</td>
                            </tr>
                            <tr>
                                <td>Số điện thoại</td>
                                <td>{ticket.phone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{ticket.email}</td>
                            </tr>
                        </table>
                        <div>
                            <small>Thông tin đặt vé đã được gửi về mail</small>
                            <br/>
                            <small>Xin vui lòng đưa mã đặt vé đến quầy vé để nhận vé</small>
                        </div>
                        <button className="btn-confirm"> Xác Nhận</button>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default DetailTicket;