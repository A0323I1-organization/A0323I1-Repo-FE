import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import AddCustomer from "./components/customer/AddCustomer";
import CustomerView from "./components/customer/CustomerView";
import EditCustomer from "./components/customer/EditCustomer";
import CustomerPofile from "./components/customer/CustomerPofile";
import NavBar from "./components/common/NavBar";
import Home from "./components/layout/Home";

function App() {
  return (
      <main className="container mt-5">
          <Router>
              <NavBar/>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={<Home/>}></Route>
                  <Route
                      exact
                      path="/view-customers"
                      element={<CustomerView/>}></Route>
                  <Route
                      exact
                      path="/add-customers"
                      element={<AddCustomer/>}></Route>
                  <Route
                      exact
                      path="/edit-customer/:id"
                      element={<EditCustomer/>}></Route>
                  <Route
                      exact
                      path="/customer-profile/:id"
                      element={<CustomerPofile/>}></Route>
              </Routes>
          </Router>
      </main>
  );
}

export default App;
