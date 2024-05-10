import {Col, Container, Row} from "react-bootstrap";
import "./Seat.css"
import {useEffect, useState} from "react";
import * as seatService from "../../service/seat/SeatService";
import * as movieService from "../../service/movieservice/MovieService";
import * as paymentService from "../../service/payment/Payment";
import {Link, useParams} from "react-router-dom";
import {format} from "date-fns";
import ReactLoading from "react-loading";
import axios from "axios";

function Seat() {

    const [listSeats, setListSeats] = useState([]);
    const {movieId} = useParams();
    const {showDate} = useParams();
    const {showTime} = useParams();
    const [groupSeat, setGroupSeat] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [movie, setMovie] = useState({});
    const formatTime = showTime.slice(0,5);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        if (listSeats.length === 0) {
            getAllSeat();
            getMovie();
        } else {
            displayAllSeat();
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [listSeats]);

    const getAllSeat = async () => {
        const parts = showDate.split('-');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const changeDate = new Date(year, month, day);

        const formattedDate = format(changeDate, "yyyy-MM-dd");

        const list = await seatService.getAllSeat(formattedDate, showTime, movieId);
        setListSeats(list);
    }

    const displayAllSeat = async () => {
        const updateGroupSeat = [[]];
        for (let i = 0; i < 10; i++) {
            const updateGroupSeatSub = [];
            for (let j = 0; j < 10; j++) {
                if (listSeats.at(i * 10 + j) != null) {
                    updateGroupSeatSub.push(listSeats.at(i * 10 + j));
                }
            }
            updateGroupSeat.push(updateGroupSeatSub);
        }
        setGroupSeat(updateGroupSeat);
    }

    const ChooseSeat = (e, seat) => {
        if (!selectedSeat.includes(seat) && !seat.checkSeat) {
            if (selectedSeat.length >= 8) {
                alert("Bạn chỉ được đặt tối đa 8 ghế !!!");
            } else {
                selectedSeat.push(seat);
                setTotal(total + seat.typeSeatPrice);
                e.target.style.backgroundColor = "#fa7406"
            }
        } else if (selectedSeat.includes(seat)) {
            setSelectedSeat(selectedSeat.filter(item => item !== seat));
            setTotal(total - seat.typeSeatPrice);
            e.target.style.backgroundColor = ""
        }
    }

    const getMovie = async () => {
        const movie = await movieService.getMovieById(movieId);
        setMovie(movie);
    }

    const ChangePage = async (e) => {
        let listId = [];
        if (selectedSeat.length > 0) {
            for (let i = 0; i < selectedSeat.length; i++) {
                listId.push(selectedSeat[i].seatId);
            }
            // await seatService.bookSeat(listId);
            const url = await paymentService.payment(total,listId);
            localStorage.setItem('listId', JSON.stringify(listId));
            window.location.href = url;
        } else {
            alert("Vui Lòng Chọn Ghế")
        }


    }


    if (isLoading) {
        return (
            <div className="pre-loading">
                <p>Chờ xíu nhe....</p>
                <ReactLoading
                    type={"spinningBubbles"}
                    color={"#3c84f1"}
                    height={100}
                    width={100}

                />
            </div>
        )
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
                            {
                                groupSeat.map((row, index) => (
                                    <div className="seat-row" key={index}>
                                        {row.map((seat, seatIndex) =>
                                            (
                                                <button key={seatIndex}
                                                        id={seat.seatId}
                                                        style={{
                                                            backgroundColor: seat.checkSeat ? "#bbbbbb" : "",
                                                            border: seat.typeSeatName === "VIP" ? "1px solid red" : "1px solid #01c73c",
                                                            cursor: seat.checkSeat ? "default" : "pointer"
                                                        }}
                                                        onClick={(e) => ChooseSeat(e, seat)}
                                                >
                                                    {seat.seatName}
                                                </button>
                                            ))}
                                    </div>
                                ))}

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
                                    src={movie.movieImage}
                                    alt="Card image cap"/>

                                <div className="info">
                                    <p>
                                        <h5>{movie.movieName}</h5>

                                    </p>
                                    <p>
                                        <span>Suất chiếu: {formatTime}/</span>
                                        <span>{showDate}</span>
                                    </p>
                                    <hr className="dotted-line"/>
                                    <p>
                                        <span>Ghế:</span>
                                        {
                                            selectedSeat.map((item, index) => (
                                                <span key={index} style={{marginLeft: "5px"}}>{item.seatName}</span>
                                            ))
                                        }
                                    </p>
                                    <hr className="dotted-line"/>
                                    <p>
                                        <span>Tổng: </span>
                                        <span>{total} </span>
                                    </p>
                                    <div>
                                        <button className="btn btn-primary">
                                            <Link to={`/booking/${movieId}`}
                                            style={{color:"white", textDecoration:"none"}}>
                                                Quay Lại
                                            </Link>
                                        </button>
                                        <button className="btn btn-primary" onClick={(e) => ChangePage(e)}>Tiếp Tục
                                        </button>
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