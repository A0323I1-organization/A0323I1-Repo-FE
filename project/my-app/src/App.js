



import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import Dasboard from "./components/dasboard/Dasboard";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
            <Route path="/dashboard" element={<Dasboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
