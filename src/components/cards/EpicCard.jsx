import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Box, IconButton, Typography } from "@mui/material";
export default function EpicCard({ icon, title, des }) {
    return (
        <Box
            sx={{
                textAlign: "left",

                borderRadius: "10px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <IconButton sx={{ color: "#fff00090", py: 0 }}>
                    {icon}
                </IconButton>
                <Typography variant="h5" fontWeight={"bold"}>
                    {title}
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#ffffff90" }}>
                {des}
            </Typography>
        </Box>
    );
}
