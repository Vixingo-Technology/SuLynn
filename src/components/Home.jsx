// File Path: C:\SuLynn\dashboard\public_site\src\components\Home.js

import React from "react";
import "../styles.css";
import hero from "../assets/hero.png";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { ArrowRightAltSharp } from "@mui/icons-material";
import logo1 from "../assets/tt.png";
import logo2 from "../assets/mb.png";
const Home = () => {
    return (
        <>
            <Box
                sx={{
                    padding: "20px",
                    pt: "50px",
                    maxWidth: "1200px",
                    margin: "auto",
                }}
            >
                <Grid2
                    container
                    spacing={3}
                    columns={{ xs: 1, md: 12 }}
                    sx={{
                        alignItems: "center",
                        // background:
                        //     "linear-gradient(-45deg,#9333ea44,#6366f1,#3b82f6,#9333ea40)",
                        // backgroundSize: "400% 400%",
                        // padding: "20px 10px",
                        // borderRadius: "10px",
                    }}
                >
                    <Grid2 item size={{ xs: 1, md: 7 }}>
                        {" "}
                        <Typography
                            variant="h5"
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            Are LLMs' Hallucinations and Mistakes Driving You
                            Crazy?
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#ffffff80" }}>
                            Introducing{" "}
                        </Typography>{" "}
                        <Typography
                            variant="h2"
                            // color="#ffffff"
                            className="text_gradient_animate"
                            sx={{
                                fontSize: "4.2rem",
                                fontWeight: "bold",
                                display: "block",
                                // opacity: "50%",
                                // background:
                                //     "linear-gradient(90deg,#9333ea,#6366f1,#3b82f650,#9333ea)",
                                // WebkitBackgroundClip: "text",
                                // WebkitTextFillColor: "transparent",
                                // lineHeight: 1.4,
                            }}
                        >
                            SuLynn.
                        </Typography>{" "}
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#ffffff",

                                fontWeight: "bold",
                                lineHeight: "120%",
                            }}
                        >
                            The Intelligent LLM corrector.
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#ffffff80" }}>
                            SuLynn harnesses the power of LLMs and brings them
                            back on track, <br /> transforming their
                            unpredictable nature into reliable, consistent, and
                            secure code.
                        </Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<ArrowRightAltSharp />}
                            sx={{
                                borderRadius: "0px",
                                my: 2,
                                color: "white",
                                borderColor: "white",
                            }}
                        >
                            {" "}
                            Learn More
                        </Button>
                    </Grid2>
                    <Grid2 size={{ xs: 1, md: 5 }}>
                        <Box sx={{ textAlign: "center" }}>
                            {" "}
                            <img src={hero} alt="" width={"100%"} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
            <Box
                sx={{
                    my: 5,
                    textAlign: "center",
                    bgcolor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "40px",
                    py: 5,
                    flexWrap: "wrap",
                }}
            >
                <img src={logo1} alt="" className="hover_effect" height={60} />
                <img src={logo2} alt="" className="hover_effect" height={40} />
                <img src={logo1} alt="" className="hover_effect" height={60} />
                <img src={logo2} alt="" className="hover_effect" height={40} />
                <img src={logo1} alt="" className="hover_effect" height={60} />
                <img src={logo2} alt="" className="hover_effect" height={40} />
            </Box>

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
        </>
    );
};

export default Home;
