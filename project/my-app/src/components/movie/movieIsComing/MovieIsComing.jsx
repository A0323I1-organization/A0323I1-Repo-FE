import { useEffect, useState } from "react";
import styles from "../movieIsComing/MovieIsComing.module.scss";
import { findAllMovieIsShowing } from "../../../service/movieservice/MovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import HeaderNew from "../headerNew/HeaderNew";
import Footer from "../footer/Footer";

function MovieIsComing() {
  const [isComing, setIsComing] = useState();

  const handleGetAllMovieIsComing = async () => {
    let temp = await findAllMovieIsShowing();
    setIsComing(temp);
  };

  useEffect(() => {
    handleGetAllMovieIsComing();
  }, []);

  return (
    <>
      <HeaderNew></HeaderNew>

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
              <NavLink
                to={"/galaxy/phim-sap-chieu"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Sắp chiếu
              </NavLink>
            </li>
          </ul>
        </div>
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
      </div>

      <Footer></Footer>
    </>
  );
}

export default MovieIsComing;
