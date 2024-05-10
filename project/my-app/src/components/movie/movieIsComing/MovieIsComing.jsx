import { useEffect, useState } from "react";
import styles from "../movieIsComing/MovieIsComing.module.scss";
<<<<<<< HEAD
=======
import { findAllMovieIsShowing } from "../../../service/movieservice/MovieService";
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import HeaderNew from "../headerNew/HeaderNew";
import Footer from "../footer/Footer";
<<<<<<< HEAD
import Loading from "../loadingPage/Loading";
import {findAllMovieIsShowing} from "../../../service/movie/MovieService";

function MovieIsComing() {
  const [isComing, setIsComing] = useState();
  const [loading,setLoading] = useState(false);
=======

function MovieIsComing() {
  const [isComing, setIsComing] = useState();
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d

  const handleGetAllMovieIsComing = async () => {
    let temp = await findAllMovieIsShowing();
    setIsComing(temp);
  };

  useEffect(() => {
    handleGetAllMovieIsComing();
  }, []);

<<<<<<< HEAD
  if(!isComing) return (<Loading></Loading>)

  return (
    <>
    <HeaderNew></HeaderNew>
=======
  return (
    <>
      <HeaderNew></HeaderNew>
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d

      <div className="container2">
        <div
          className={styles.titleList}
          style={{ marginBottom: 25 }}
          data-aos="fade-right"
        >
          <ul className={styles.title}>
            <li style={{ display: "flex" }}>
              <span /> <h4 className={styles.h4Film}>PHIM</h4>
            </li>
            <li className={`${styles.titleLine} ${styles.active}`}>
              Đang chiếu
            </li>
            <li className={styles.titleLine}>
<<<<<<< HEAD
              <NavLink to={"/galaxy/phim-sap-chieu"} style={{textDecoration:'none',color:'black'}}>
=======
              <NavLink
                to={"/galaxy/phim-sap-chieu"}
                style={{ textDecoration: "none", color: "black" }}
              >
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d
                Sắp chiếu
              </NavLink>
            </li>
          </ul>
        </div>
<<<<<<< HEAD

          <div>
            <ul className={styles.videos}>
              {isComing.map((item, index) => (
                <li data-aos="fade-up" key={index}>
                  <div className={styles.videoItem}>
                    <div className={styles.videoTop}>
                      <a href="#" className={styles.videoThumb}>
                        <img src={item.movieImage} alt={item.movieName} />
                      </a>
                      <div className={styles.listBtn}>
                        <a href="#" className={styles.buyClick}>
                          <FontAwesomeIcon icon={faTicket} />{" "}
                          <div style={{ marginLeft: "5px" }}>Mua vé</div>
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
          </div>

=======
        {isComing ? (
          <>
            <div>
              <ul className={styles.videos}>
                {isComing.map((item, index) => (
                  <li data-aos="fade-up" key={index}>
                    <div className={styles.videoItem}>
                      <div className={styles.videoTop}>
                        <a href="#" className={styles.videoThumb}>
                          <img src={item.movieImage} alt={item.movieName} />
                        </a>
                        <div className={styles.listBtn}>
                          <a href="#" className={styles.buyClick}>
                            <FontAwesomeIcon icon={faTicket} />{" "}
                            <div style={{ marginLeft: "5px" }}>Mua vé</div>
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
            </div>
          </>
        ) : (
          <></>
        )}
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d
      </div>

      <Footer></Footer>
    </>
  );
}

export default MovieIsComing;
