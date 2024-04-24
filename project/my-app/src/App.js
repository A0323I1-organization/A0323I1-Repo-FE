
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Dasboard from "./components/dasboard/Dasboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dasboard/>}></Route>
            {/* <Route path="/product/create" element={<ProductCreate/>}></Route> */}
            {/* <Route path="/book/:id" element={<BookCreate/>}></Route> */}
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
