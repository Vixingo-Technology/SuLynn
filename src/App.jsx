// File Path: C:\SuLynn\dashboard\public_site\src\App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Login from "./components/Login.jsx"; 
import DownloadPage from "./components/DownloadPage";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;