
import './App.css';
// import {BrowserRouter,Route,Routes} from "react-router-dom"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Create from './components/employee/create';
import Dasboard from './components/dashboard/dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        

        <Route path='/create' element={<Create/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
