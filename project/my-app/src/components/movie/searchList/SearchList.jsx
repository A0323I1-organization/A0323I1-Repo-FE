import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTicket, faXmark} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import HeaderNew from "../headerNew/HeaderNew";
import styles from "../searchList/SearchList.module.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import queryString from "query-string";
import {findAllMovie, findAllMovieByMovieName} from "../../../service/movieservice/MovieService";
import Loading from "../loadingPage/Loading";

function SearchList() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const keyword = queryParams["keyword"];
  const [key, setKey] = useState(keyword);
  const [movies, setMovies] = useState();
  const handleSearchFilmByName = async () => {
    let temp = await findAllMovie();
    const filteredResults = temp.filter((item) =>
        item.movieName.toLowerCase().includes(key.toLowerCase())
    );
    if (!temp) {
      setMovies([]);
    } else {
      setMovies(filteredResults);
    }
    console.log(temp)
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/galaxy/search?keyword=${key}`);
    }
  };

  useEffect(() => {
    handleSearchFilmByName();
  }, [key])


  return (
      <>
        {!movies ? <Loading></Loading> :
            <>
              <HeaderNew></HeaderNew>
              <div>
                <div className={styles.formSearch}>
                  <input
                      type="text"
                      placeholder="Tìm kiếm..."
                      onChange={(e) => setKey(e.target.value)}
                      onKeyPress={handleKeyPress}
                      value={key}
                  />
                  <div>
                    <FontAwesomeIcon icon={faXmark} onClick={() => setKey("")}/>
                  </div>
                </div>

                <div className={movies.length > 0 ? styles.formResult : styles.formResult2}>
                  {movies ? movies.length : 0} Kết quả tìm kiếm cho từ khóa: <span
                    style={{color: '#f58020'}}>{key}</span>
                </div>

              </div>
              {movies ?

                  <div className={`${styles.listFilm} container2`}>
                    <ul className={styles.videos}>
                      {movies.map((item, index) => (
                          <li data-aos="fade-up" key={index}>
                            <div>
                              <div className={styles.videoTop}>
                                <Link to={`/booking/${item.movieId}`} className={styles.videoThumb}>
                                  <img
                                      src={item.movieImage}
                                      alt={item.movieName}
                                  />
                                </Link>
                                <div className={styles.listBtn}>
                                  <Link to={`/booking/${item.movieId}`} className={styles.buyClick}>
                                    <FontAwesomeIcon icon={faTicket}/>
                                    <div style={{marginLeft: "5px"}}>Mua vé</div>
                                  </Link>
                                </div>
                              </div>
                              <div className={styles.videoInfo}>
                                <Link to={`/booking/${item.movieId}`} className={styles.videoName}>
                                  {item.movieName}
                                </Link>
                              </div>
                            </div>
                          </li>
                      ))}
                    </ul>
                  </div>
                  : <></>}
              <Footer></Footer>
            </>
        }
      </>
  );
}

export default SearchList;
