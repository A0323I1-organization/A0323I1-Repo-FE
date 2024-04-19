

import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalendarShow from "./components/calendarshow/CalendarShow";
import Seat from "./components/seat/Seat";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path={"/booking/:movieId"} element={<CalendarShow/>}></Route>
          <Route path={"/seat/:showDate/:showTIme/:movieId"} element={<Seat/>}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
