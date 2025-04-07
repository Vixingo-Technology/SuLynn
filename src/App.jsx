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
import Signup from "./components/Signup.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import LandingLayout from "./layouts/LandingLayout.jsx";
import Synergy from "./components/Synergy.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/synergy" element={<Synergy />} />
                    <Route path="/download" element={<DownloadPage />} />
                </Route>

                <Route path="auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route
                    path="*"
                    element={<h1 style={{ margin: "300px" }}>404 Not Found</h1>}
                />
            </Routes>
        </Router>
    );
};

export default App;
