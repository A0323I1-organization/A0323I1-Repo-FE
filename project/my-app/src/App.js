
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Customer} from "./components/customer/customer.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/login/LoginForm";
import React from "react";
import Contact from "./components/layout/Contact";
import Home from "./components/layout/Home";
import NotFound from "./components/layout/NotFound";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm /> } />
            <Route path="/register" element={<RegisterForm /> } />
            <Route path="/navbar" element={<Customer /> } />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
