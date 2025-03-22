// File Path: C:\SuLynn\dashboard\public_site\src\components\Home.js

import React from "react";
import "../styles.css";
import hero from "../assets/hero.png";
import { Box, Grid2, Stack, Typography } from "@mui/material";
const Home = () => {
    return (
        <Box sx={{ padding: "20px" }}>
            <Grid2
                container
                spacing={3}
                columns={{ xs: 1, md: 12 }}
                sx={{
                    background:
                        "linear-gradient(-45deg,#9333ea44,#6366f1,#3b82f6,#9333ea40)",
                    backgroundSize: "400% 400%",
                    padding: "20px 10px",
                    borderRadius: "10px",
                }}
            >
                <Grid2 size={{ xs: 1, md: 4 }}>
                    <Box sx={{ textAlign: "center" }}>
                        {" "}
                        <img src={hero} alt="" width={300} />
                    </Box>
                </Grid2>
                <Grid2 item size={{ xs: 1, md: 8 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: "left",
                            color: "white",
                            fontWeight: "bold",
                            lineHeight: "120%",
                        }}
                    >
                        LLM's Hallucinations and Mistakes Are Driving You Crazy?
                    </Typography>

                    <Typography variant="h3" sx={{ color: "#ffffff80" }}>
                        That's why we created
                        <Typography
                            // variant="h2"

                            sx={{
                                fontSize: "3.5rem",
                                fontWeight: "bold",
                                background:
                                    "linear-gradient(90deg,#9333ea,#6366f1,#3b82f650,#9333ea)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                lineHeight: 1.4,
                            }}
                        >
                            SuLynn.
                        </Typography>{" "}
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#ffffff" }}>
                        The Intelligent Code Corrector for LLMs
                    </Typography>
                </Grid2>
            </Grid2>

            <Box sx={{ my: 10, textAlign: "center" }}>
                <Typography
                    sx={{ fontWeight: "bold", opacity: "50%" }}
                    variant="h4"
                >
                    It's a revolution.
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", py: 0 }}
                    className="text_gradient_animate"
                >
                    Transforming LLMs into <br /> Reliable, Consistent, and
                    Secure code.
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center" }}
                ></Typography>
            </Box>
            <p>
                The AI-powered solution to keep Large Language Models (LLMs) on
                track.
            </p>
            <div className="features">
                <div className="feature">
                    <h3>Real-Time AI Monitoring</h3>
                    <p>Detect and correct AI hallucinations in real-time.</p>
                </div>
                <div className="feature">
                    <h3>Subscription-Based Access</h3>
                    <p>
                        Start with a 7-day free trial, then continue for just
                        $9/month.
                    </p>
                </div>
                <div className="feature">
                    <h3>Seamless Integration</h3>
                    <p>Prepare SuLynn for full MorphicBrain integration.</p>
                </div>
            </div>
            <a href="/register" className="cta-button">
                Get Started
            </a>
        </Box>
    );
};

export default Home;
