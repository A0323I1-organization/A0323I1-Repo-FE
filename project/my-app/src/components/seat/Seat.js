import {Col, Container, Row} from "react-bootstrap";
import "./Seat.css"
import {useEffect, useState} from "react";
import * as seatService from "../../service/seat/SeatService"
import {useParams} from "react-router-dom";
import {format} from "date-fns";

function Seat() {

    const [listSeat, setListSeat] = useState();
    const {movieId} = useParams();
    const {date} = useParams();
    const {time} = useParams();

    useEffect = () => {

    }

    const getAllSeat = async () => {
        const parts = date.split('-');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const date = new Date(year, month, day);

        const formattedDate = format(date, "yyyy-MM-dd");


        const res = await seatService.getAllSeat(date)
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
                                    <button style={{color: "blue", borderBottom: "1px solid blue"}}>Chọn Ghế</button>
                                </li>
                                <li>
                                    <button style={{opacity: 0.4}}>Thanh Toán</button>
                                </li>
                                <li>
                                    <button style={{opacity: 0.4}}>Xác Nhận</button>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div className="containerSeat">
                            <div className="seat-row">
                                <button style={{backgroundColor: "#fa7406"}}>A1</button>
                                <button style={{backgroundColor: "#bbbbbb"}}>A2</button>
                                <button style={{border: "1px solid #01c73c"}}>A3</button>
                                <button style={{border: "1px solid #01c73c"}}>A4</button>
                                <button style={{border: "1px solid #01c73c"}}>A5</button>
                                <button style={{border: "1px solid #01c73c"}}>A6</button>
                                <button style={{border: "1px solid #01c73c"}}>A7</button>
                                <button style={{border: "1px solid #01c73c"}}>A8</button>
                                <button style={{border: "1px solid #01c73c"}}>A9</button>
                                <button style={{border: "1px solid #01c73c"}}>A10</button>
                            </div>


                            <div className="instruction">
                                <h4>Màn Hình</h4>
                                <hr/>
                                <div className="seat-demo">
                                    <div className="seat-item">
                                        <button className="checked-seat" id="checked-seat" name="checked-seat"></button>
                                        <label htmlFor="checked-seat">Ghế đã chọn</label>
                                    </div>
                                    <div className="seat-item">
                                        <button className="uncheck-seat" id="uncheck-seat" name="uncheck-seat"></button>
                                        <label htmlFor="uncheck-seat">Ghế đã bán</label>
                                    </div>
                                    <div className="seat-item">
                                        <button className="vip-seat" id="vip-seat" name="vip-seat"></button>
                                        <label htmlFor="vip-seat">Ghế VIP</label>
                                    </div>
                                    <div className="seat-item">
                                        <button className="normal-seat" id="normal-seat" name="normal-seat"></button>
                                        <label htmlFor="normal-seat">Ghế thường</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="confirm-ticket">
                            <div>
                                <img
                                    src="https://cdn.galaxycine.vn/media/2024/2/23/kungfu-panda-4-500_1708659195441.jpg"
                                    alt="Card image cap"/>

                                <div className="info">
                                    <h5>Kung Fu Panda 4</h5>
                                    <p>
                                        <span>Suất chiế: 08:00</span>
                                        <span>T3 23/03/2024</span>
                                    </p>
                                    <hr className="dotted-line"/>
                                    <p>
                                        <span>2x Ghế:  </span>
                                        <span>180.000 </span>
                                    </p>
                                    <hr className="dotted-line"/>
                                    <p>
                                        <span>Tổng: </span>
                                        <span>180.000 </span>
                                    </p>
                                    <div>
                                        <button href="#" className="btn btn-primary">Quay Lại</button>
                                        <button href="#" className="btn btn-primary">Tiếp Tục</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Seat;