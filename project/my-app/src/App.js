<<<<<<< HEAD
=======
<<<<<<< HEAD

import './App.css';
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Create from "./components/employee/create";
import ListEmployee from "./components/employee/ListEmployee";
import DetailEmployee from "./components/employee/DetailEmployee";
import SearchList from "./components/movie/searchList/SearchList";
import DSF from "./components/movie/homePage/DSF";
import UpcomingMovie from "./components/movie/upcomingMovie/UpcomingMovie";
import MovieIsComing from "./components/movie/movieIsComing/MovieIsComing";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/create' element={<Create/>}></Route>
            <Route path="/employee" element={<ListEmployee/>}></Route>
            <Route path="/employee/detail/:id" element={<DetailEmployee/>}></Route>
            <Route path="/galaxy/search" element={<SearchList></SearchList>}></Route>
            <Route path="" element = {<DSF/>}></Route>
            <Route path="/galaxy/phim-sap-chieu" element = {<UpcomingMovie/>}></Route>
            <Route path="/galaxy/phim-dang-chieu" element = {<MovieIsComing/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
=======
>>>>>>> f70506fe314bd335c11a30c6d3fc89cd985ea169
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
<<<<<<< HEAD

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
=======

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
>>>>>>> 4d2a04845e712049722fcc768a196749b4a8663d
=======
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>

    </>
  );
>>>>>>> parent of 22549da (10/05)
>>>>>>> f70506fe314bd335c11a30c6d3fc89cd985ea169
}

export default App;
