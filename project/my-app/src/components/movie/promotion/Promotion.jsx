import "slick-carousel/slick/slick.css";
import styles from "../promotion/slick-react.module.scss"
import "../promotion/slick-theme.css";
import "../promotion/slick-react.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";

function Promotion() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="slider-container container2" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        <div className={styles.title}>
       <span/> <h4>TIN KHUYẾN MÃI</h4>
       </div>
      <Slider {...settings}>

        <div className={styles.card}>
          <div className={styles.cardTop}>
            <a href="#">
              <img
                src="https://cdn.galaxycine.vn/media/2023/5/23/quy-dinh-do-tuoi-digital-1350x900_1684835377244.jpg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.cardBottom}>
            <a href="#">
              <h5>Hello</h5>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <a href="#">
              <img
                src="https://cdn.galaxycine.vn/media/2024/4/2/750_1712051414517.jpg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.cardBottom}>
            <a href="#">
              <h5>Hello</h5>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <a href="#">
              <img
                src="https://cdn.galaxycine.vn/media/2023/11/23/giaveu22-digital-1800x1200_1700731546949.jpg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.cardBottom}>
            <a href="#">
              <h5>Hello</h5>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <a href="#">
              <img
                src="https://cdn.galaxycine.vn/media/2024/1/19/1350x900_1705628944220.jpg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.cardBottom}>
            <a href="#">
              <h5>Hello</h5>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <a href="#">
              <img
                src="https://cdn.galaxycine.vn/media/2022/11/1/combo-u22-digital-450x300_1667285240629.jpg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.cardBottom}>
            <a href="#">
              <h5>Hello</h5>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <a href="#">
              <img
                src="https://cdn.galaxycine.vn/media/2024/3/28/750_1711619420948.jpg"
                alt=""
              />
            </a>
          </div>
          <div className={styles.cardBottom}>
            <a href="#">
              <h5>Hello</h5>
            </a>
          </div>
        </div>
    
      </Slider>
    </div>
  );
}

export default Promotion;
