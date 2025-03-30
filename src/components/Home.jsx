// File Path: C:\SuLynn\dashboard\public_site\src\components\Home.js

import React from "react";
import "../styles.css";
import hero from "../assets/hero.png";
import { Box, Button, Grid2, Paper, Stack, Typography } from "@mui/material";
import { ArrowRightAltSharp } from "@mui/icons-material";
import logo1 from "../assets/tt.png";
import logo2 from "../assets/mb.png";
import start from "../assets/start.png";
import WorkCard from "./cards/WorkCard";
import PrimeTitle from "./Headings/PrimeTitle";
import NewCard from "./cards/NewCard";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.gif";
import f3 from "../assets/f3.png";
import IconCard from "./cards/IconCard";
import map from "../assets/map.png";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <>
            <Box
                sx={{
                    padding: "20px",
                    pt: "50px",
                    maxWidth: "1140px",
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
                        </Typography>
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
                            size="large"
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
                    Stop Fighting Your AI.
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", py: 0 }}
                    className="text_gradient_animate"
                >
                    SuLynn Brings Order to LLM Chaos.
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center" }}
                ></Typography>
            </Box>

            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    flexWrap: "wrap",
                    padding: "20px",
                    textAlign: "center",
                    alignItems: "center",
                }}
            >
                <Paper>
                    <Typography variant="h6">
                        Tired of debugging AI hallucinations and errors?
                    </Typography>
                </Paper>
                <Paper>
                    <Typography variant="h6">
                        Frustrated with LLM code fragments that don't fit
                        together?
                    </Typography>
                </Paper>
                <Paper>
                    <Typography variant="h6">
                        Spending more time fixing AI code than writing your own?
                    </Typography>
                </Paper>
            </Stack>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", textAlign: "center", my: 5 }}
            >
                SuLynn is your intelligent code corrector, bringing reliability{" "}
                <br />
                and control to LLM-powered development.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    flexWrap: "wrap",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ borderRadius: "0px", my: 2, mb: 5 }}
                >
                    Get Started with SuLynn for Free
                </Button>
            </Box>
            <Box sx={{ py: 10, margin: 2 }}>
                {/* <Typography
                    variant="h4"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                    How SuLynn Works
                </Typography> */}
                <Grid2
                    container
                    spacing={3}
                    columns={{ xs: 1, md: 12 }}
                    sx={{
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Grid2
                        item
                        size={{ xs: 1, md: 3 }}
                        sx={
                            {
                                // textAlign: "center",
                                // justifyContent: "center",
                                // alignItems: "center",
                            }
                        }
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                minHeight: "200px",
                            }}
                        >
                            {" "}
                            <img src={start} alt="" />
                            <Typography
                                variant="h5"
                                sx={{ textAlign: "center", mr: 2 }}
                            >
                                Built for AI Coders Who Demand Results — Not
                                Frustration
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <WorkCard
                            title={"01."}
                            des={" Real-time AI output monitoring."}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <WorkCard
                            title={"02."}
                            des={" Automatic code assembly from fragments."}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <WorkCard
                            title={"03."}
                            des={" Alerts on AI hallucination or deviation."}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <WorkCard
                            title={"04."}
                            des={" Safe checkpointing and comparison."}
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <WorkCard
                            title={"05."}
                            des={
                                " Built-in for Healthcare, Finance, and Natural Foods industries."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <WorkCard
                            title={"06."}
                            des={
                                " Fast performance — checks AI output in under 1/10th of a second."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, md: 3 }}>
                        <Box
                            sx={{
                                minHeight: "200px",
                                display: "flex",
                                flexDirection: "row",
                                textAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h5">
                                Powered by MorphicBrain's advanced AI.
                            </Typography>
                            <img
                                src={start}
                                alt=""
                                style={{ rotate: "180deg" }}
                            />
                        </Box>
                    </Grid2>
                </Grid2>
                <PrimeTitle
                    title="Built for High-Stakes Industries"
                    subTitle={
                        "Built for Any Industry — But Especially Where Precision Matters Most"
                    }
                    lildes={
                        "SuLynn is designed to work in any field, but it truly shines in industries where mistakes are costly — financially, ethically, or for human lives."
                    }
                />
                <Grid2
                    sx={{ mt: 4, maxWidth: "1200px", mx: "auto" }}
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 1, sm: 6, md: 12 }}
                >
                    <Grid2 item size={{ xs: 1, sm: 4, md: 4 }}>
                        <NewCard
                            imgsrc={f1}
                            title={"🏥 Healthcare "}
                            description={
                                "  Helping AI generate safe and compliant code for medical research, patient data analysis, and health tech solutions."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, sm: 4, md: 4 }}>
                        <NewCard
                            imgsrc={f2}
                            title={"💰 Finance "}
                            description={
                                " Preventing AI mistakes in fraud detection, algorithmic trading, and financial compliance tools."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 1, sm: 4, md: 4 }}>
                        <NewCard
                            imgsrc={f3}
                            title={"🌿 Natural Foods & Nutrition "}
                            description={
                                " Empowering smarter AI solutions for food production, supply chain, and nutrition science. "
                            }
                        />
                    </Grid2>
                </Grid2>
            </Box>

            <Box sx={{ my: 10 }}>
                <Grid2 container columns={{ xs: 1, md: 12 }}>
                    <Grid2
                        item
                        size={{ xs: 1, md: 6 }}
                        sx={{
                            background: "#f9f9f9",
                        }}
                    >
                        <Box sx={{ textAlign: "center" }}>
                            <img src={map} alt="" width={"100%"} />
                        </Box>
                    </Grid2>
                    <Grid2
                        item
                        size={{ xs: 1, md: 6 }}
                        sx={{ bgcolor: "primary.main", opacity: "80%" }}
                    >
                        <Box sx={{ my: 5, px: 5 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    // textAlign: "center",
                                    fontWeight: "bold",

                                    my: 5,
                                }}
                            >
                                SuLynn + MorphicBrain: <br /> The Ultimate LLM
                                Corrector Powerhouse
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    my: 5,
                                    maxWidth: "500px",
                                    marginRight: "auto",
                                }}
                            >
                                Explore the Synergy: How MorphicBrain multiplies
                                and enhances SuLynn's capabilities.
                            </Typography>
                            <NavLink to={"/synergy"}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    sx={{ borderRadius: "0px", my: 2 }}
                                >
                                    Explore the Synergy
                                </Button>
                            </NavLink>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
            <Box sx={{ textAlign: "center", my: 10 }}>
                <PrimeTitle
                    title={
                        "Unleashing the Full Potential of SuLynn with MorphicBrain "
                    }
                    subTitle={
                        "How SuLynn Keeps AI in Check — in 3 Simple Steps"
                    }
                />
                <Grid2
                    container
                    spacing={2}
                    sx={{ my: 8, maxWidth: "1140px", mx: "auto" }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                >
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Monitor"}
                            description={
                                "SuLynn checks every line of code your AI writes — every 3 seconds."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Validate"}
                            description={
                                "It alerts you when code is wrong, missing, or altered."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Assemble & Protect"}
                            description={
                                "SuLynn assembles complete, ready-to-run scripts, and stores safe checkpoints."
                            }
                        />
                    </Grid2>
                </Grid2>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                      Ready to Get Started with SuLynn? {" "}
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{ borderRadius: "0px", my: 4 }}
                >
                    Get Started with SuLynn for Free
                </Button>
            </Box>
            {/* ses */}
            {/* <p>
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
            </a> */}
        </>
    );
};

export default Home;
