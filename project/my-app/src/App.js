

import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalendarShow from "./components/calendarshow/CalendarShow";
import Seat from "./components/seat/Seat";
import DetailTicket from "./components/ticket/DetailTicket";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path={"/booking/:movieId"} element={<CalendarShow/>}></Route>
          <Route path={"/seat/:showDate/:showTime/:movieId"} element={<Seat/>}></Route>
          <Route path={"/detail-ticket"} element={<DetailTicket/>}></Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
