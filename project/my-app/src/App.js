
import './App.css';
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


    </>
  );
}

export default App;
