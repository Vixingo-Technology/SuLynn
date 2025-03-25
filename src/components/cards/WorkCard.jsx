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
                    // border: "1px solid #e0e0e0",
                }}
            >
                <Typography variant="h2" color="primary">
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: "text.secondary",
                        mt: 1.5,
                    }}
                    variant="h6"
                >
                    {des}
                </Typography>
            </Box>
        </Box>
    );
}
