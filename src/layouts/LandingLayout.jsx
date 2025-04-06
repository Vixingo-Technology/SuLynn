import React from "react";
import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingLayout() {
    return (
        <>
            <div style={{ paddingTop: "64px" }}>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
