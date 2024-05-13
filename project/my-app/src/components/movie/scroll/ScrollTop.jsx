import React, { useState, useEffect } from 'react';
import styles from'../scroll/scrollTop.module.scss';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Xử lý sự kiện khi click nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`${styles['scroll-to-top']} ${isVisible ? styles.visible : ''}`}>
      <button onClick={scrollToTop} title="Go to top">
        &#8679;
      </button>
    </div>
  );
};


export default ScrollTop;