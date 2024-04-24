
import './App.css';
// import {BrowserRouter,Route,Routes} from "react-router-dom"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

import Dasboard from "./components/dasboard/Dasboard";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Dasboard/>}/>
            {/*<Route path="/exportPdf/:id" element={<Dasboard/>}/>*/}
          </Routes>
      </Router>




        <Route path='/create' element={<Create/>}></Route>
            <Route path="/employee" element={<ListEmployee/>}></Route>
            <Route path="/employee/detail/:id" element={<DetailEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
