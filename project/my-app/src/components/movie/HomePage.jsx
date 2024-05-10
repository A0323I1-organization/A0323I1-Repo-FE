import Footer from "./footer/Footer";
import HeaderNew from "./headerNew/HeaderNew";
import ListFilm from "./listFilm/ListFilm";
import Promotion from "./promotion/Promotion";
import ScrollTop from "./scroll/ScrollTop";
import SlideShow from "./slideShow/SlideShow";

function HomePage() {
    return (
        <>
        <HeaderNew></HeaderNew>
        <SlideShow></SlideShow>
        <ListFilm></ListFilm>
        <Promotion/>
        <Footer></Footer>
        <ScrollTop></ScrollTop>
        </>
    )
}

export default HomePage;