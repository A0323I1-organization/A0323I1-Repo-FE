import "../headerNew/HeaderNew.css";
import styles from "../headerNew/HeaderNew.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faX,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {findAllMovieIsShowing, findAllUpcomingMovie } from "../../../service/movieservice/MovieService";
import "bootstrap/dist/css/bootstrap.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";

function HeaderNew() {
  const [movieIsComing, setMovieIsComing] = useState();
  const [upcomingMovie, setUpcomingMovie] = useState();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(true);
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/galaxy/search") {
      setIsShow(false)
    }
  },[location])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/galaxy/search?keyword=${inputValue}`);
    }
  };

  const handleGetAllMovieIsComing = async () => {
    let temp = await findAllMovieIsShowing();
    setMovieIsComing(temp);
  };

  const handleGetAllUpcomingMovie = async () => {
    let temp = await findAllUpcomingMovie();
    setUpcomingMovie(temp);
  }

  useEffect(() => {
    handleGetAllMovieIsComing();
    handleGetAllUpcomingMovie();
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  function toggleInputVisibility(event) {
    var input = document.getElementById("write_input");

    if (input.style.display === "none") {
      input.style.display = "block"; // Hiển thị ô nhập liệu nếu đang ẩn
      event.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử khác
    } else {
      input.style.display = "none"; // Ẩn ô nhập liệu nếu đang hiển thị
    }
  }

  useEffect(() => {
    const handleClick = (event) => {
      const nameList = event.target.closest(".name-list");
      if (!nameList) return;

      const dropdownList = nameList.nextElementSibling;
      const isActive = dropdownList.classList.contains("active");
      closeAllDropdowns();
      if (!isActive) {
        dropdownList.classList.add("active");
      }
    };

    const closeAllDropdowns = () => {
      const dropdownLists = document.querySelectorAll(".dropdown-list-right");
      dropdownLists.forEach((dropdownList) => {
        dropdownList.classList.remove("active");
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <nav className={styles.navHeader}>
            <NavLink to={'/'}>
              <img
                src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
                alt="galaxy cinema"
                height="60px"
                width="115px"
              />
            </NavLink>
            <div>
              <div className={styles.choose}>
                <ul id={styles.nav}>
                  <a
                    className={styles.buyImg}
                    href=""
                    style={{ textDecoration: "none", marginRight:"20px" }}
                  >
                    <img
                      src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp"
                      alt=""
                      height="36px"
                      width="100px"
                    />
                  </a>
                  <li className={styles.navChoose}>
                    <div>
                      Phim <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <div className={styles.titleListFilm}>
                      {movieIsComing ? <>
                      <div className={`container ${styles.titleSubnav}`}>
                        <span />
                        <a href="#">Phim đang chiếu</a>
                      </div>
                      <ul className={`container ${styles.subnavVideo}`}>
                        {movieIsComing.slice(0,4).map((item, index) => (
                          <li key={index} className={styles.imgLi}>
                            <div className={styles.headerImg}>
                            <Link to={`/booking/${item.movieId}`}>
                              <img src={item.movieImage} />
                            </Link>
                            </div>
                            <div className={styles.headerTitle}> 
                              <Link to={`/booking/${item.movieId}`}>{item.movieName}</Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                      </> : <></>}
                      {upcomingMovie ? <>
                      <div className={`container ${styles.titleSubnav}`}>
                        <span />
                        <a href="#">Phim sắp chiếu</a>
                      </div>
                      <ul className={`container ${styles.subnavVideo}`}>
                        {upcomingMovie.slice(0,4).map((item, index) => (
                          <li key={index}>
                            <div className={styles.headerImg}>
                            <a href="#">
                              <img src={item.movieImage} />
                            </a>
                            </div>
                            <div className={styles.headerTitle}> 
                            <a href="#">{item.movieName}</a>
                            </div>
                          </li>
                        ))}
                      </ul>
                      </> :<></>}
                    </div>
                  </li>
                  <li className={styles.navChoose}>
                    <div>
                      Góc Điện Ảnh <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <ul className={styles.subnav}>
                      <li>
                        <a href="#">Thể loại phim</a>
                      </li>
                      <li>
                        <a href="#">Diễn viên</a>
                      </li>
                      <li>
                        <a href="#">Đạo diễn</a>
                      </li>
                      <li>
                        <a href="#">Bình luận phim</a>
                      </li>
                      <li>
                        <a href="#">Blog điện ảnh</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.navChoose}>
                    <div>
                      Sự kiện <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <ul className={styles.subnav}>
                      <li>
                        <a href="#">Ưu đãi</a>
                      </li>
                      <li>
                        <a href="#">Phim hay tháng</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.navChoose}>
                    <div>
                      Rạp/Giá vé <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    <ul className={`${styles.subnav} ${styles.left}`}>
                      <li>
                        <a href="#">Galaxy Đà Nẵng</a>
                      </li>
                      <li>
                        <a href="#">Galaxy Nguyễn Du</a>
                      </li>
                      <li>
                        <a href="#">Galaxy Sala</a>
                      </li>
                      <li>
                        <a href="#">Galaxy Tân Bình</a>
                      </li>
                      <li>
                        <a href="#">Galaxy Kinh Dương Vương</a>
                      </li>
                      <li>
                        <a href="#">Galaxy Quang Trung</a>
                      </li>
                      <li>
                        <a href="#">Galaxy Bến Tre</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <label
                htmlFor="check"
                className="open-menu"
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faBars} />
              </label>
            </div>
            <div className={styles.navRight}>
              <div className={styles.searchLogin}>
                <div style={{ display: "flex" }} className={styles.searchLogin}>
                  {isShow && <div className={styles.search}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      onClick={toggleInputVisibility}
                    />
                  </div>}
                  <a
                    href="#"
                    id={styles.clickLogin}
                    style={{ display: "flex" }}
                  >
                    <div className={styles.clickUser}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>{" "}
                    Đăng nhập
                  </a>
                </div>
                <div className={styles.clickImg}>
                  <a href="" style={{ textDecoration: "none" }}>
                    <img
                      src="https://www.galaxycine.vn/_next/static/media/join-Gstar.24c52de9.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div style={{ padding: "0 0 40px" }} className={styles.clickSearch}>
            <input
              type="text"
              defaultValue=""
              placeholder="Tìm kiếm..."
              id="write_input"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </header>
      <input type="checkbox" id="check" />
      <label
        htmlFor="check"
        className={isActive ? "my-element active" : "my-element"}
        onClick={handleClick}
      />
      <div className={isActive ? "menu-right active" : "menu-right"}>
        <label htmlFor="check" className="close-menu" onClick={handleClick}>
          <FontAwesomeIcon icon={faX} />
        </label>
        <div>
          <div className={styles.imgResponsive}>
            <img
              src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
              alt="galaxy cinema"
              height="80px"
              width="140px"
            />
          </div>
          {isShow&&<div className={styles.searchInput}>
            <input
              type="text"
              className={styles.formSearch}
              placeholder="Tìm Kiếm..."
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="currentColor"
              className={styles.searchButton}
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>}
        </div>
        <div className={styles.menuListRight}>
          <div>
            <div className="name-list" style={{ display: "inline-block" }}>
              Phim <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-list-right">
              <li>
                <NavLink to={"/galaxy/phim-dang-chieu"}>Phim đang chiếu</NavLink>
              </li>
              <li>
                <NavLink to={"/galaxy/phim-sap-chieu"}>Phim sắp chiếu</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="name-list" style={{ display: "inline-block" }}>
              Góc Điện Ảnh <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-list-right">
              <li>
                <a href="#">Thể loại phim</a>
              </li>
              <li>
                <a href="#">Diễn viên</a>
              </li>
              <li>
                <a href="#">Đạo diễn</a>
              </li>
              <li>
                <a href="#">Bình luận phim</a>
              </li>
              <li>
                <a href="#">Blog điện ảnh</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="name-list" style={{ display: "inline-block" }}>
              Sự kiện <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-list-right">
              <li>
                <a href="#">Ưu đãi</a>
              </li>
              <li>
                <a href="#">Phim hay tháng</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="name-list" style={{ display: "inline-block" }}>
              Rạp/Giá vé <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <ul className="dropdown-list-right left">
              <li>
                <a href="#">Galaxy Đà Nẵng</a>
              </li>
              <li>
                <a href="#">Galaxy Nguyễn Du</a>
              </li>
              <li>
                <a href="#">Galaxy Sala</a>
              </li>
              <li>
                <a href="#">Galaxy Tân Bình</a>
              </li>
              <li>
                <a href="#">Galaxy Kinh Dương Vương</a>
              </li>
              <li>
                <a href="#">Galaxy Quang Trung</a>
              </li>
              <li>
                <a href="#">Galaxy Bến Tre</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderNew;
