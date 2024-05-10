import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import HeaderNew from "../headerNew/HeaderNew";
import styles from "../searchList/SearchList.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import queryString from "query-string";
<<<<<<< HEAD
import {findAllMovieByMovieName} from "../../../service/movie/MovieService";
=======
import { findAllMovieByMovieName } from "../../../service/movieservice/MovieService";
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d

function SearchList() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const keyword = queryParams["keyword"];
  const [key, setKey] = useState('');
  const [movies,setMovies] = useState([]);

  useEffect(()=> {
    setKey(keyword);
  },[keyword]);

  console.log(key);

  const handleSearchFilmByName = async () => {
    let temp = await findAllMovieByMovieName(key);
    setMovies(temp);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/galaxy/search?keyword=${key}`);
    }
  };

  useEffect(()=> {
    handleSearchFilmByName();
  },[key])

  return (
    <>
      <HeaderNew></HeaderNew>

      <div className={styles.formSearch}>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          onChange={(e)=>setKey(e.target.value)}
          onKeyPress={handleKeyPress}
          value={key}
        />
        <div>
        <FontAwesomeIcon icon={faXmark} onClick={()=>setKey("")}/>
        </div>
      </div>

      <div className={movies ? styles.formResult : `${styles.formResult} ${styles.action}`}>
        {movies ? movies.length : 0} Kết quả tìm kiếm cho từ khóa: <span style={{color: '#f58020'}}>{key}</span>
      </div>

      {movies ?

      <div className={`${styles.listFilm} container2`}>
        <ul className={styles.videos}>
          {movies.map((item,index) => (
          <li data-aos="fade-up" key={index}>
            <div>
              <div className={styles.videoTop}>
                <a href="#" className={styles.videoThumb}>
                  <img
                    src={item.movieImage}
                    alt={item.movieName}
                  />
                </a>
                <div className={styles.listBtn}>
                  <a href="#" className={styles.buyClick}>
                    <FontAwesomeIcon icon={faTicket} />
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
      : <></>}
      <Footer></Footer>
    </>
  );
}

export default SearchList;
