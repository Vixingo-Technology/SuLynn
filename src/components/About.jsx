// File Path: C:\SuLynn\dashboard\public_site\src\components\About.js

import React from "react";
import "../styles.css";
import { Box, Grid, Grid2, Paper, Stack, Typography } from "@mui/material";
import IconCard from "./cards/IconCard";
import PrimeTitle from "./Headings/PrimeTitle";
import Contact from "./Contact";
import mb from "../assets/mb.png";
import art from "../assets/art.png";
import GrainIcon from "@mui/icons-material/Grain";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import TerminalIcon from "@mui/icons-material/Terminal";
import BiotechIcon from "@mui/icons-material/Biotech";
const About = () => {
    return (
        <>
            <Box
                textAlign={"center"}
                sx={{ maxWidth: "1140px", mx: "auto" }}
                pt={10}
                p={2}
            >
                <PrimeTitle
                    title={"About SuLynn"}
                    subTitle={"An advanced AI-powered system"}
                    lildes={
                        "SuLynn is designed to help developers and AI users take back control over code generation. "
                    }
                />
                <Typography
                    variant="h5"
                    // fontFamily={"inter"}
                    textAlign="center"
                    fontWeight={500}
                    mb={4}
                >
                    When working with large language models (LLMs) like ChatGPT
                    or others, developers often face
                    <br />
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        // sx={{ bgcolor: "background.paper" }}
                        component={Paper}
                        display={"inline-block"}
                        my={3}
                    >
                        inconsistent, hallucinated, response delay or broken
                        code
                    </Typography>
                    <br />- SuLynn fixes that.
                </Typography>
                <Typography variant="h6" maxWidth={800} mx="auto" pb={4}>
                    We make AI development safe, focused, and reliable — so you
                    can spend time building, not debugging AI mistakes.
                </Typography>
                <PrimeTitle
                    title={"Our Mission"}
                    subTitle={"To empower every AI user"}
                    lildes={
                        " with tools that ensure reliability, clarity, and safety when working with intelligent code-generating systems."
                    }
                />
                <Grid2
                    container
                    spacing={2}
                    sx={{
                        my: 8,
                        maxWidth: "1140px",
                        mx: "auto",
                        alignItems: "center",
                    }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                >
                    {" "}
                    <Grid2 size={{ xs: 1, sm: 8, md: 6 }}>
                        <Typography
                            variant="h4"
                            sx={{ textAlign: "left", p: 2 }}
                        >
                            SuLynn was created to{" "}
                            <b>
                                close the gap between AI creativity and human
                                quality{" "}
                            </b>{" "}
                            control, making sure that every line of code
                            produced by an LLM is checked, assembled, and
                            trusted
                        </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 1, sm: 8, md: 6 }} sx={{ p: 3 }}>
                        <img src={art} alt="" width={"100%"} />
                    </Grid2>
                </Grid2>
                <PrimeTitle
                    title={"Why We Built SuLynn"}
                    subTitle={"AI code generators are powerful"}
                    lildes={"but they come with serious limitations:"}
                />{" "}
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
                            ❌ LLMs often hallucinate code that doesn't work.
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="h6">
                            ❌ They can forget what they previously wrote,
                            breaking entire scripts.
                        </Typography>
                    </Paper>

                    <Paper>
                        <Typography variant="h6">
                            ❌ In long chats, LLMs lose focus or give short,
                            incomplete answers.
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="h6">
                            ❌ AI models can change previously suggested code
                            without reason.
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography variant="h6">
                            ❌ Developers are left frustrated and wasting time
                            fixing AI’s mistakes.
                        </Typography>
                    </Paper>
                </Stack>
                <Typography variant="h4" sx={{ my: 6, fontWeight: 700 }}>
                    SuLynn solves all of this — automatically.
                </Typography>
                <PrimeTitle
                    subTitle={"What Makes SuLynn Different?"}
                    // subTitle={""}
                />
                <Grid2
                    container
                    spacing={2}
                    sx={{ my: 8, maxWidth: "1140px", mx: "auto" }}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                >
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Real-time AI monitoring"}
                            description={
                                "Checks every AI suggestion every 3 seconds."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Auto Code Assembly"}
                            description={
                                "Takes code fragments and builds complete, working scripts."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Hallucination Detection "}
                            description={
                                "Alerts you when AI writes code that doesn't make sense"
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Focus Management"}
                            description={
                                "Prevents AI from drifting off-topic in long chats."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={" Version Control "}
                            description={
                                "Keeps trusted versions of code you can always restore."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Lightning Fast"}
                            description={`Analyzes and validates AI output in under 1/10th of a second.`}
                        />
                    </Grid2>
                </Grid2>
                <PrimeTitle
                    subTitle={
                        "Powered by MorphicBrain — Advanced AI core modules for deep analysis, learning, and validation."
                    }
                />
                <br />
                <PrimeTitle title={"Who Is SuLynn For?"} />
                <Box>
                    <Grid2
                        container
                        spacing={2}
                        sx={{ my: 8, maxWidth: "1140px", mx: "auto" }}
                        columns={{ xs: 1, sm: 8, md: 12 }}
                    >
                        <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                            <IconCard
                                icon={
                                    <GrainIcon
                                        sx={{
                                            fontSize: "60px",
                                        }}
                                    />
                                }
                                title={
                                    " AI Developers working on complex AI-assisted coding projects."
                                }
                                // description={
                                //     "Checks every AI suggestion every 3 seconds."
                                // }
                            />
                        </Grid2>
                        <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                            <IconCard
                                icon={
                                    <TerminalIcon
                                        sx={{
                                            fontSize: "60px",
                                        }}
                                    />
                                }
                                title={
                                    "Software Engineers using LLMs to speed up coding but frustrated with broken suggestions."
                                }
                                // description={
                                //     "Takes code fragments and builds complete, working scripts."
                                // }
                            />
                        </Grid2>
                        <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                            <IconCard
                                icon={
                                    <DomainAddIcon
                                        sx={{
                                            fontSize: "60px",
                                        }}
                                    />
                                }
                                title={
                                    "Businesses that rely on AI for healthcare, finance, and food industry solutions where **mistakes can cost real money or lives**. "
                                }
                                // description={
                                //     "Alerts you when AI writes code that doesn't make sense"
                                // }
                            />
                        </Grid2>
                        <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                            <IconCard
                                icon={
                                    <BiotechIcon
                                        sx={{
                                            fontSize: "60px",
                                        }}
                                    />
                                }
                                title={
                                    "Researchers using AI to experiment but needing accuracy and stability."
                                }
                            />
                        </Grid2>
                    </Grid2>
                </Box>
                <Box mb={4}>
                    <PrimeTitle
                        title={"Our Vision for the Future"}
                        subTitle={
                            "We believe AI should be a trustworthy tool, not a risky experiment."
                        }
                    />

                    <Typography
                        variant="h5"
                        my={2}
                        sx={{ maxWidth: "900px", mx: "auto" }}
                    >
                        With SuLynn, we’re building a world where AI works side
                        by side with humans safely, efficiently, and
                        transparently. Our goal is to expand SuLynn’s reach
                        across industries, making AI development accessible and
                        dependable for everyone,
                    </Typography>
                    <Typography variant="h5" fontWeight={700}>
                        from startups to global enterprises.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Typography
                        variant="h6"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            justifyContent: "center",
                            flexDirection: "column",

                            color: "text.secondary",
                        }}
                    >
                        Powered by <img src={mb} alt="" width={"250px"} />
                    </Typography>
                </Box>
                <PrimeTitle
                    title={"Best of All"}
                    subTitle={
                        "SuLynn is not just another AI tool. It's powered by MorphicBrain, a cutting-edge AI popwerhouse system equipped with:"
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
                            title={"ASI Veritas"}
                            description={
                                "Advanced fact-checking AI for truth validation."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"Deep Learning and Algorithm Generator"}
                            description={
                                "AI that learns, evolves, and generates."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 4 }}>
                        <IconCard
                            title={"MorganLogic "}
                            description={
                                "Specialized for Fintech and high-stakes industries."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 4, md: 6 }}>
                        <IconCard
                            title={"KnowledgeHub"}
                            description={
                                "Always connected to fresh, validated information from the web."
                            }
                        />
                    </Grid2>
                    <Grid2 item size={{ xs: 2, sm: 8, md: 6 }}>
                        <IconCard
                            title={" Neuromorphic Computing "}
                            description={
                                "AI that thinks like a brain — fast, adaptive, and secure."
                            }
                        />
                    </Grid2>
                </Grid2>
                <PrimeTitle title={"Got questions or want to collaborate?  "} />
                <Contact />
            </Box>
        </>
    );
};

export default About;
