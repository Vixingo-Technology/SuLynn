import React from "react";
import art2 from "../assets/art2.png";

import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Card,
    Grid2,
} from "@mui/material";
import {
    Groups,
    Psychology,
    CheckCircle,
    SyncAlt,
    TrackChanges,
    GpsFixed,
    AutoFixHigh,
    Science,
    Construction,
    ContactSupport,
    ArrowRight,
    ArrowDownward,
} from "@mui/icons-material";
import PrimeTitle from "./Headings/PrimeTitle";
import start from "../assets/start.png";
import WorkCard from "./cards/WorkCard";
import { NavLink } from "react-router-dom";

const features = [
    {
        name: "🌀 Ambiguity Detector",
        function: "Flags vague/conflicting inputs",
        role: "Ensures clarity before processing",
    },
    {
        name: "🛡️ ASI-Veritas",
        function: "Cross-checks facts & claims",
        role: "Validates truth in real-time",
    },
    {
        name: "🔄 Syntax & Logic Tracker",
        function: "Analyzes loops, broken code, flow errors",
        role: "Keeps AI outputs coherent",
    },
    {
        name: "🧭 Context Manager (coming soon)",
        function: "Maps multi-turn dialogue for meaning",
        role: "Prevents drift in reasoning",
    },
    {
        name: "💡 Feedback Trainer",
        function: "Learns from user corrections & logs",
        role: "Improves with every use",
    },
];

const roadmap = [
    "Integrate with external truth APIs",
    "Coordinate with MorphicBrain to inherit multi-agent logic",
    "Share verified knowledge with external LLMs",
    "Power developer tools for clean AI-assisted code generation",
    "Plug into ModuleViz for transparency in correction chains",
];

function Synergy() {
    return (
        <>
            <Box sx={{ py: 6, px: 2 }}>
                <Container maxWidth="lg">
                    <PrimeTitle
                        title={" Truth is not a solo act. It's a symphony.  "}
                        subTitle={"Introducing Synergy "}
                        lildes={
                            "SuLynn's intelligent correction engine backed by MorphicBrain."
                        }
                    />

                    <Grid container spacing={4} mb={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">
                                🔗 What is Synergy?
                            </Typography>

                            <Typography mt={2} gutterBottom variant="body1">
                                Synergy is the invisible layer where LLM
                                correction modules work together to detect,
                                correct, and prevent hallucinations,
                                contradictions, and vague output in real time.
                                It's SuLynn’s collective intelligence engine.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h4" gutterBottom>
                                🧠 The Collaborative Brainpower
                            </Typography>
                            <Grid container mt={2} mb={4}>
                                {features.map((mod, idx) => (
                                    <Grid xs={12} key={idx}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 3,
                                                borderRadius: 3,
                                                // minHeight: "200px",
                                                mb: 2,
                                            }}
                                        >
                                            <Typography variant="h5">
                                                {mod.name}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                mt={2}
                                                mb={1}
                                            >
                                                <strong>Function:</strong>{" "}
                                                {mod.function}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                <strong>Role:</strong>{" "}
                                                {mod.role}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    maxWidth: "500px",
                                    margin: "0 auto",
                                }}
                            >
                                <img src={art2} width={"100%"} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Box my={10} textAlign="center">
                        <Typography variant="h4" gutterBottom>
                            🧬 How Synergy Works
                        </Typography>
                        <List
                            sx={{
                                mt: 4,
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: 2,
                                justifyContent: "center",
                            }}
                        >
                            {[
                                "User submits input",
                                "Input is routed through Synergy",
                                "Each module performs its task in parallel or sequence",
                                "Synergy merges outputs into one unified result",
                                "Logs are captured for continual refinement",
                            ].map((step, idx) => (
                                <Card
                                    key={idx}
                                    variant="outlined"
                                    sx={{
                                        mb: 2,
                                        bgcolor: "background.default",
                                    }}
                                >
                                    <ListItem>
                                        {/* <ListItemIcon>
                                            <CheckCircle color="success" />
                                        </ListItemIcon> */}
                                        <ListItemText
                                            primary={step}
                                            secondary
                                        />
                                        <ArrowRight />
                                    </ListItem>
                                </Card>
                            ))}
                        </List>
                    </Box>

                    <Box my={6}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            textAlign={"center"}
                            my={4}
                        >
                            {" "}
                            🚀 Synergy in Action
                        </Typography>

                        <Grid2
                            container
                            columns={{ xs: 1, md: 12 }}
                            spacing={2}
                        >
                            <Grid2 size={{ xs: 1, md: 4 }}>
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
                                        <strong>With Synergy:</strong>
                                    </Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 1, md: 4 }}>
                                <WorkCard
                                    title={"01."}
                                    des={
                                        "Ambiguity Detector highlights unclear terms"
                                    }
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 1, md: 4 }}>
                                <WorkCard
                                    title={"02."}
                                    des={
                                        "Context modules flag the contradiction"
                                    }
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 1, md: 4 }}>
                                <WorkCard
                                    title={"03."}
                                    des={"Syntax flow aligns the logic"}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 1, md: 4 }}>
                                <WorkCard
                                    title={"04."}
                                    des={"ASI-Veritas verifies facts"}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 1, md: 4 }}>
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
                                        <strong>Without Synergy:</strong> <br />
                                        The LLM might hallucinate.
                                    </Typography>
                                    <img
                                        src={start}
                                        alt=""
                                        style={{ rotate: "180deg" }}
                                    />
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box my={6}>
                        <Typography
                            variant="h4"
                            textAlign={"center"}
                            gutterBottom
                        >
                            🔮 What’s Next: Roadmap
                        </Typography>
                        <List>
                            {roadmap.map((item, idx) => (
                                <ListItem
                                    key={idx}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        textAlign: "center",
                                    }}
                                >
                                    <ArrowDownward />

                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box my={6} textAlign="center">
                        <PrimeTitle
                            title={"🤝 Synergy for Developers & Partners"}
                            subTitle={"Coming soon:"}
                        />

                        <Box
                            mt={4}
                            display={"flex"}
                            gap={2}
                            flexDirection={{ xs: "column", md: "row" }}
                            justifyContent={"center"}
                        >
                            <WorkCard
                                title={"01."}
                                des={"Correction-as-a-Service (CaaS)"}
                            />
                            <WorkCard
                                title={"02."}
                                des={
                                    "Real-time syntax auditing API for developers"
                                }
                            />
                            <WorkCard
                                title={"03."}
                                des={"Trust scores for outputs"}
                            />
                        </Box>
                        <Box mt={4}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ mb: 2 }}
                            >
                                Visit Developer Portal
                            </Button>
                            <NavLink to={"/contact"}>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{ mb: 2 }}
                                >
                                    Contact Us
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Synergy;
