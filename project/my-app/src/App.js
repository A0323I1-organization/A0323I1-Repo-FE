import './App.css';
// import {BrowserRouter,Route,Routes} from "react-router-dom"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Create from './components/employee/create';
import SearchList from "./components/movie/searchList/SearchList";
import DSF from "./components/movie/homePage/DSF";
import UpcomingMovie from "./components/movie/upcomingMovie/UpcomingMovie";
import MovieIsComing from "./components/movie/movieIsComing/MovieIsComing";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/galaxy/search" element={<SearchList/>}></Route>
                    <Route path="" element={<DSF/>}></Route>
                    <Route path="/galaxy/phim-sap-chieu" element={<UpcomingMovie/>}></Route>
                    <Route path="/galaxy/phim-dang-chieu" element={<MovieIsComing/>}></Route>
                    <Route path='/create' element={<Create/>}></Route>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
