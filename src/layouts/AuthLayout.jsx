import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <Box sx={{ backgroundColor: "background.paper", minHeight: "100vh" }}>
            <Outlet />
        </Box>
    );
}

export default AuthLayout;
