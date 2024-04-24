import styles from '../footer/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
return (
    <>
    <footer data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" id={styles.footer}>
    <div className="container2">
        <div className={styles.textFooter}>
            <div className={styles.textFooterBig}><h3>GIỚI THIỆU</h3>
                <ul className={styles.textFooterSmall}>
                    <li><a href="#">Về Chúng Tôi</a></li>
                    <li><a href="#">Thỏa Thuận Sử Dụng</a></li>
                    <li><a href="#">Quy Chế Hoạt Động</a></li>
                    <li><a href="#">Chính Sách Bảo Mật</a></li>
                </ul>
            </div>
            <div className={styles.textFooterBig}><h3>GÓC ĐIỆN ẢNH</h3>
                <ul className={styles.textFooterSmall}>
                    <li><a href="#">Thể Loại Phim</a></li>
                    <li><a href="#">Bình Luận Phim</a></li>
                    <li><a href="#">Blog Điện Ảnh</a></li>
                    <li><a href="#">Phim Hay Tháng</a></li>
                    <li><a href="#">Phim IMAX</a></li>
                </ul>
            </div>
            <div className={styles.textFooterBig}><h3>HỖ TRỢ</h3>
                <ul className={styles.textFooterSmall}>
                    <li><a href="#">Góp Ý</a></li>
                    <li><a href="#">Sale & Services</a></li>
                    <li><a href="#">Rạp / Giá vé</a></li>
                    <li><a href="#">Tuyển Dụng</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className={styles.textFooterBig}><h3>Galaxy Cinema</h3>
                <ul className={styles.textFooterSmall}>
                    <div className={styles.listIconFooter}>
                        <li className={styles.iconFooter}><a href="https://facebook.com/galaxycinevn" target="_blank">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                            </a></li>
                        <li className={styles.iconFooter}><a href="https://www.youtube.com/user/galaxymovies" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                            </a></li>
                        <li className={styles.iconFooter}><a href="https://www.instagram.com/galaxycinema" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                            </a></li>
                    </div>
                </ul>
            </div>
        </div>
        <div className={styles.footerFooterBottom}>
            <div className={styles.footerBottom}>
                <h3>CÔNG TY CỔ PHẦN PHIM THIÊN NGÂN</h3>
                <p>Toà nhà Bitexco Nam Long, 63A Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí Minh, Việt Nam</p>
            </div>
        </div>
    </div>
</footer>
    </>
)
}

export default Footer;