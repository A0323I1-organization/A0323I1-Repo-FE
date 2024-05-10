import {useEffect, useState} from "react";
import * as showTimeServices from "../../service/showtimeservice/ShowTimeService"
import * as movieService from "../../service/movieservice/MovieService"
import "./CalendarShow.css";
import {Card, Col, Container, Row} from "react-bootstrap";
import {format} from "date-fns";
import {Link, useParams} from 'react-router-dom';

import ReactLoading from "react-loading";



function CalendarShow() {
    const [listShowDates, setListShowDates] = useState([]);
    const [movie, setMovie] = useState({})
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [showDates, setShowDates] = useState([])
    const [selectedShowDate, setSelectedShowDate] = useState(null);
    const [listShowTimes, setListShowTimes] = useState([]);
    const [selectedShowTime, setSelectedShowTime] = useState();
    const [movieIsShowing, setMovieIsShowing] = useState([]);
    const [showTimeHidden, setShowTimeHidden] = useState(true);
    const [videoSrc, setVideoSrc] = useState('');


    useEffect(() => {
        if (listShowDates.length === 0 || !movie || !movieIsShowing) {
            getMovie();
            findAllShowDate();
            getAllMovieShowing();
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [movieId]);


    const getMovie = async () => {
        const movie = await movieService.getMovieById(movieId);
        const dateFormat = format(movie.movieStartDay, "dd-MM-yyyy");
        movie.movieStartDay = dateFormat;
        movie.movieActor = await movie.movieActor.split(',');
        setMovie(movie);
        setVideoSrc(movie.movieTrailer);
    }

    const getAllMovieShowing = async () => {
        const listMovie = await movieService.getAllMovieIsShowing();
        const top3Movie = [];
        for (let i = 0; i < 3; i++) {
            top3Movie.push(listMovie[i]);
        }
        setMovieIsShowing(top3Movie);
    }

    const handleGetMovie = (movieId) => {
        window.location.href = `http://localhost:3000/booking/${movieId}`;
    }

    const findAllShowDate = async () => {
        const listShowDates = await showTimeServices.findAllShowDateByMovieId(movieId);
        setListShowDates(listShowDates);
        setShowDates(listShowDates);
    };
    const getShowDate = async (e, showDate) => {
        const partDate = e.target.value.split('-');
        const day = parseInt(partDate[0], 10);
        const month = parseInt(partDate[1], 10) - 1;
        const year = parseInt(partDate[2], 10);

        const date = new Date(year, month, day);

        const formattedDate = format(date, "yyyy-MM-dd");
        const showTimes = await showTimeServices.findAllShowTime(formattedDate, movieId);

        const time = new Date();
        if (day <= time.getDate()) {
            const filterShowTimes = showTimes.filter(item => {
                const partTime = item.movieTime.split(':');
                const hour = parseInt(partTime[0], 10);
                return time.getHours() <= hour;
            })
            setListShowTimes(filterShowTimes);
        } else {
            const filterShowTimes = showTimes.filter(item => {
                const partTime = item.movieTime.split(':');
                const hour = parseInt(partTime[0], 10);
                return hour;
            })
            setListShowTimes(filterShowTimes);
        }
        setSelectedShowTime(null);
        setSelectedShowDate(e.target.value);
        setShowTimeHidden(false);
    }
    const getShowTime = async (e) => {
        setSelectedShowTime(e.target.value);
        const showDate = selectedShowDate;
        const showTime = e.target.value;
        const movieId = movie.movieId;
        if (selectedShowDate !== null) {
            window.location.href = `/seat/${showDate}/${showTime}/${movieId}`;
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
            <Col md={12}>
                <div className="trailer">
                    <iframe width="100%"
                            height="500px"
                            src={videoSrc}
                            allowFullScreen
                            title="GeeksforGeeks"

                    />
                </div>
            </Col>
            <Container>
                <div className="content">
                    <Row>
                        <div className="row">
                            <Col md={4}>
                                <div className="pic">
                                    <img src={movie.movieImage} alt="Movie Poster"/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="introduce">
                                    <h2>{movie.movieName}</h2>
                                    <div>
                <span style={{margin: "5px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256
                            0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280
                            243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>
                    {movie.movieDuration}
                    </span>
                                        <span style={{margin: "5px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3
                            28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24
                            -24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144
                            0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm
                            -144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/>
                        </svg>
                                            {movie.movieStartDay}
                    </span>
                                    </div>
                                    <div>
                                        <ul>Quốc Gia:
                                            <li>{movie.movieManufacturer}</li>
                                        </ul>

                                    </div>
                                    <div>
                                        <ul>Thể Loại:
                                            <li>Hành Động</li>
                                            <li>Tâm Lý
                                            </li>

                                        </ul>
                                    </div>
                                    <div>
                                        <ul>Đạo Diễn:
                                            <li>{movie.movieDirector}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>Diễn Viên :
                                            {movie.movieActor.map((actor, index) => {
                                                return <li key={index}>{actor}</li>;
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="nav-right">
                                    <h2>Phim Đang Chiếu</h2>
                                    {
                                        movieIsShowing.map((movie, index) => (
                                            <Card className="card" key={index}>
                                                <Card.Img className="img" variant="top"
                                                          src={movie.movieImage}/>
                                                <a>
                                                    <button onClick={() => handleGetMovie(movie.movieId)}>Mua Vé
                                                    </button>
                                                </a>
                                            </Card>
                                        ))

                                    }
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Col md={8}>
                        <div className="review">
                            <b>
                                Nội Dung Phim
                            </b>
                            <p>
                                {movie.movieDetail}
                            </p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="calendar ">
                            <strong>Ngày Chiếu:</strong>
                            <div>
                                <div>
                                    {
                                        showDates.map((showDate, index) => (
                                            <button
                                                key={index}
                                                value= {format(showDate.showDate, "dd-MM-yyyy")}
                                                onClick={(e) => getShowDate(e, showDate)}
                                                style={{
                                                    color: selectedShowDate === format(showDate.showDate, "dd-MM-yyyy")? 'white' : 'black',
                                                    backgroundColor: selectedShowDate === format(showDate.showDate, "dd-MM-yyyy") ? 'blue' : 'white'
                                                }}
                                            >
                                                {format(showDate.showDate, "dd-MM-yyyy")}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </Col>
                    <Col>
                        {showTimeHidden ? "" :
                            <div className="show-time">
                                <strong>Suất Chiếu:</strong>
                                <br/>
                                <br/>
                                <div><b>{movie.movieVersion ? "2D" : "3D"} </b></div>
                                <div>
                                    {listShowTimes.map((showTime, index) => (
                                        <button
                                            key={index}
                                            value={showTime.movieTime}
                                            onClick={(e) => getShowTime(e)}
                                            style={{
                                                color: selectedShowTime === showTime.movieTime ? 'white' : 'black',
                                                backgroundColor: selectedShowTime === showTime.movieTime ? 'blue' : 'white'
                                            }}
                                        >
                                            {showTime.movieTime}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        }
                    </Col>
                </div>

            </Container>

            )

        </>

    )

}


export default CalendarShow;