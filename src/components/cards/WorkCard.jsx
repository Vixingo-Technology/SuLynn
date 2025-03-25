import { Box, Typography } from "@mui/material";
import React from "react";

export default function WorkCard({ title, des }) {
    return (
        <Box>
            <Box
                sx={{
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    border: "0.5px solid #F7FAFC",
                    padding: "20px",
                }}
            >
                <Typography variant="h4" color="primary">
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: "text.secondary",
                        mt: 2,
                    }}
                    variant="h6"
                >
                    {des}
                </Typography>
            </Box>
        </Box>
    );
}
