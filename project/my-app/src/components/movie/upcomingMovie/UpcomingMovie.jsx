import { useEffect, useState } from "react";
import styles from "../upcomingMovie/UpcomingMovie.module.scss";
import { findAllUpcomingMovie } from "../../../service/movieservice/MovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderNew from "../headerNew/HeaderNew";
import Footer from "../footer/Footer";

function UpcomingMovie() {
  const [upcoming, setUpcoming] = useState([]);

  const handleGetAllUpcomingMovie = async () => {
    let temp = await findAllUpcomingMovie();
    setUpcoming(temp);
  };

  useEffect(() => {
    handleGetAllUpcomingMovie();
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
            <li className={styles.titleLine}>
              <NavLink to={"/galaxy/phim-dang-chieu"} style={{textDecoration:'none',color:'black'}}>
                Đang chiếu
              </NavLink>
            </li>
            <li className={`${styles.titleLine} ${styles.active}`}>
              Sắp chiếu
            </li>
          </ul>
        </div>
        {upcoming ? (
          <div>
            <ul className={styles.videos}>
              {upcoming.map((item, index) => (
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
        ) : (
          <></>
        )}
      </div>

      <Footer></Footer>
    </>
  );
}

export default UpcomingMovie;
