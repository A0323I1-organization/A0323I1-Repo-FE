
import './App.css';
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
}

export default App;
