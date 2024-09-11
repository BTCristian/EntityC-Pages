import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
// import GetInTouch from "../components/GetInTouch";
import ContactForm from "../components/ContactForm";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-in-touch" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
