import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import PrimeTitle from "./Headings/PrimeTitle";
import EpicCard from "./cards/EpicCard";
import {
    AndroidSharp,
    Apple,
    EmojiEvents,
    LaptopWindows,
    WindowSharp,
} from "@mui/icons-material";

const DownloadPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasSubscription, setHasSubscription] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        checkSubscriptionStatus();
    }, []);

    const checkSubscriptionStatus = async () => {
        setLoading(true);
        const token = localStorage.getItem("user-token");

        if (!token) {
            setIsAuthenticated(false);
            setHasSubscription(false);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get("http://127.0.0.1:8000/users/me", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setIsAuthenticated(true);
                setHasSubscription(
                    response.data.subscription_status === "Active"
                );
            }
        } catch (error) {
            console.error("Error checking subscription:", error);
            setIsAuthenticated(false);
            setHasSubscription(false);
        }

        setLoading(false);
    };

    return (
        <>
            <Box
                sx={{
                    padding: "20px",
                    m: "40px auto",
                    maxWidth: "1140px",
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight={"bold"}
                    gutterBottom
                    className="text_gradient_animate"
                >
                    SuLynn Browser Extension
                </Typography>
                <Box
                    sx={{
                        padding: "20px",
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Free to use for all MB users
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Assists in reading & writing on any webpage
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Supports chats with links, images, PDFs, GPTs, etc.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Integrates MorphicBrainAi, DeepSeek-R1, Gemini 2.0 Flash
                        and Gemini 2.0 Pro.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <EpicCard title={"100K+"} des={"5-Star Ratings"} />
                    <EpicCard
                        icon={<EmojiEvents />}
                        title={"2025"}
                        des={"Chrome's Favorites"}
                    />
                    <EpicCard title={"10M+"} des={"Active Users"} />
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{ fontSize: "1.2rem", width: "200px" }}
                        onClick={() => navigate("/pricing")}
                    >
                        Download
                    </Button>
                    {/* <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        sx={{ fontSize: "1.2rem" }}
                        onClick={() => navigate("/pricing")}
                    >
                        Add to Chorme
                    </Button> */}
                </Box>
                <Box
                    sx={{
                        mt: 2,
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <IconButton sx={{ color: "#fff" }}>
                        <AndroidSharp />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }}>
                        <Apple />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }}>
                        <WindowSharp />
                    </IconButton>
                </Box>
            </Box>

            {/* <div className="download-container">
                <h2>Download SuLynn Browser Extension</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : isAuthenticated ? (
                    hasSubscription ? (
                        <div>
                            <p>
                                Thank you for subscribing! Click below to
                                download the extension:
                            </p>
                            <a
                                href="/downloads/SuLynn_Browser_Extension.zip"
                                download
                            >
                                <button className="download-btn">
                                    Download Now
                                </button>
                            </a>
                        </div>
                    ) : (
                        <div>
                            <p>
                                🚨 You must have an active subscription to
                                download the extension.
                            </p>
                            <button
                                className="subscribe-btn"
                                onClick={() => navigate("/pricing")}
                            >
                                Subscribe Now
                            </button>
                        </div>
                    )
                ) : (
                    <div>
                        <p>🚨 Please log in to access the download.</p>
                        <button
                            className="login-btn"
                            onClick={() => navigate("/login")}
                        >
                            Log In
                        </button>
                    </div>
                )}
            </div> */}
        </>
    );
};

export default DownloadPage;
