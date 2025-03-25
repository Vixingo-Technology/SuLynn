import { Box, Typography } from "@mui/material";
import React from "react";

export default function PrimeTitle({ title, subTitle, lildes }) {
    return (
        <Box sx={{ my: 10, textAlign: "center", px: 2 }}>
            <Typography
                sx={{ fontWeight: "bold", opacity: "50%" }}
                variant="h4"
            >
                {title}
            </Typography>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", py: 0 }}
                className="text_gradient_animate"
            >
                {subTitle}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    pt: 1,
                    maxWidth: "800px",
                    margin: "auto",
                    opacity: "70%",
                }}
            >
                {lildes}
            </Typography>
        </Box>
    );
}
