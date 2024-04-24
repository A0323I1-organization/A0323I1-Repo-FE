
import './App.css';
// import {BrowserRouter,Route,Routes} from "react-router-dom"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Create from './components/employee/create';
import Dasboard from './components/dashboard/dashboard';
import ListEmployee from "./components/employee/ListEmployee";
import DetailEmployee from "./components/employee/DetailEmployee";
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>


        <Route path='/create' element={<Create/>}></Route>
            <Route path="/employee" element={<ListEmployee/>}></Route>
            <Route path="/employee/detail/:id" element={<DetailEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
