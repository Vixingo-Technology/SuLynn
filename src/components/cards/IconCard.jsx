import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

export default function IconCard({ icon, title, description }) {
    const card = (
        <React.Fragment>
            <CardContent>
                {icon}
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                    sx={{ color: "text.secondary", mb: 1.5 }}
                ></Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <>
            <Box sx={{ minWidth: 275, mx: "auto", height: "100%", px: 2 }}>
                <Card
                    variant="outlined"
                    elevation={4}
                    sx={{
                        padding: 1,
                        borderRadius: "0px",
                        height: "100%",
                        backgroundColor: "transparent",
                        borderColor: "#ffffff10",
                    }}
                >
                    {card}
                </Card>
            </Box>
        </>
    );
}
