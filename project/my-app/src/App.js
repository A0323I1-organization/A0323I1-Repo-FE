import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalendarShow from "./components/calendarshow/CalendarShow";
import Seat from "./components/seat/Seat";
import DetailTicket from "./components/ticket/DetailTicket";
import SearchList from "./components/movie/searchList/SearchList";
import HomePage from "./components/movie/HomePage";
import UpcomingMovie from "./components/movie/upcomingMovie/UpcomingMovie";
import MovieIsComing from "./components/movie/movieIsComing/MovieIsComing";


function App() {
    return (

        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path={"/booking/:movieId"} element={<CalendarShow/>}></Route>
                <Route path={"/seat/:showDate/:showTime/:movieId"} element={<Seat/>}></Route>
                <Route path={"/detail-ticket"} element={<DetailTicket/>}></Route>
                <Route path="/galaxy/search" element={<SearchList></SearchList>}></Route>
                <Route path="" element={<HomePage/>}></Route>
                <Route path="/galaxy/phim-sap-chieu" element={<UpcomingMovie/>}></Route>
                <Route path="/galaxy/phim-dang-chieu" element={<MovieIsComing/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
