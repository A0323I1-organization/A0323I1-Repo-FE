import "../listFilm/ListFilm.css";
import styles from "../listFilm/ListFilm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faTicket } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {findAllMovieIsShowing, findAllUpcomingMovie} from "../../../service/movie/MovieService";

function ListFilm() {

  const [movies, setMovies] = useState();
  const [status,setStatus] = useState(true);

  const handleGetAllMovieIsComing = async () => {
    let temp = await findAllMovieIsShowing();
    setMovies(temp);
    setStatus(true);
  };

  const handleGetAllUpcomingMovie = async () => {
    let temp = await findAllUpcomingMovie();
    setMovies(temp);
    setStatus(false);
  }

  useEffect(() => {
    handleGetAllMovieIsComing();
  }, []);
    
  const [activeLi, setActiveLi] = useState(null);
  const defaultLiRef = useRef(null);

  useEffect(() => {
    changeContent(defaultLiRef.current);
  }, []);

  function changeContent(element) {
    if (element) {
      const lis = document.querySelectorAll(".title-list .title-line");
      lis.forEach((li) => li.classList.remove("active-name"));
      element.classList.add("active-name");
      setActiveLi(element);
    }
  }

  if(!movies) return null;

  return (
    <>
      <div className="container2">
        <div
          className="title-list"
          style={{ marginBottom: 25 }}
          data-aos="fade-right"
        >
          <ul className="title">
            <li style={{ display: "flex" }}>
              <span /> <h4 className="h4Film">PHIM</h4>
            </li>
            <li
              ref={defaultLiRef}
              className="title-line active-name"
              onClick={() => {changeContent(defaultLiRef.current);handleGetAllMovieIsComing()}}
            >
              Đang chiếu
            </li>
            <li
              className="title-line"
              onClick={() => {changeContent(defaultLiRef.current.nextSibling);handleGetAllUpcomingMovie()}}
            >
              Sắp chiếu
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.videos}>

      
              {movies.slice(0,8).map((item,index) => (
                  <li data-aos="fade-up" key={index}>
                              <div className={styles.videoItem}>
                              <div className={styles.videoTop}>
                                <a href="#" className={styles.videoThumb}>
                                  <img
                                    src={item.movieImage}
                                    alt={item.movieName}
                                  />
                                </a>
                                <div className={styles.listBtn}>
                                  <a href="#" className={styles.buyClick}>
                                    <FontAwesomeIcon icon={faTicket} /> <div style={{marginLeft:'5px'}}>Mua vé</div>
                                  </a>
                                </div>
                              </div>
                              <div className={styles.videoInfo}>
                                <a href="#" className={styles.videoName}>
                                  {item.movieName}
                                </a>
                              </div>
                            </div>
                            </li>
              ))}
          </ul>
          {Object.keys(movies).length == 4 && status ?(
          <div className="row" style={{ margin: "20px 0" }}>
            <div className="col-md-12 d-flex justify-content-center">
              <NavLink to={'/galaxy/phim-dang-chieu'} className="btn btn-outline-primary">
                Xem thêm <FontAwesomeIcon icon={faAnglesRight} />
              </NavLink>
            </div>
          </div>
          ) : <></>}
          
          {Object.keys(movies).length == 1 && !status ?(
          <div className="row" style={{ margin: "20px 0" }}>
            <div className="col-md-12 d-flex justify-content-center">
              <NavLink to={'/galaxy/phim-sap-chieu'} className="btn btn-outline-primary">
                Xem thêm <FontAwesomeIcon icon={faAnglesRight} />
              </NavLink>
            </div>
          </div>
          ) : <></>}
        </div>
      </div>
    </>
  );
}

export default ListFilm;
