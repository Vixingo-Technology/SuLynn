import Grid from "@mui/material/Grid2";

import React from "react";
import Logo from "../components/dynamic/Logo";
import { Box, Button, Typography } from "@mui/material";
import SignupForm from "../components/forms/SignupForm";

function Signup() {
    return (
        <div>
            <Grid
                container
                spacing={2}
                columns={{ xs: 1, sm: 8, md: 12 }}
                sx={{ alignItems: "center" }}
            >
                <Grid
                    item
                    size={{ xs: 2, sm: 4, md: 6 }}
                    sx={{
                        background: (theme) =>
                            `linear-gradient(90deg,${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
                        height: { xs: "100%", sm: "100vh" },
                        display: "flex",
                        flexDirection: "column",
                        pt: "2rem",
                        alignItems: "center",
                    }}
                >
                    <Logo />
                    <Box
                        sx={{
                            maxWidth: "600px",
                            textAlign: "center",
                            p: "1rem",
                            position: "relative",
                            flex: 2,
                            pb: "4rem",
                        }}
                    >
                        <Box sx={{ my: "1rem" }}>
                            <Typography
                                variant="h2"
                                className="text_gradient_animate"
                                sx={{ fontWeight: 700 }}
                            >
                                Start building with your free plan
                            </Typography>
                            <br />
                            <Typography variant="h6" color="#ffffff90">
                                No credit card required.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "flex", sm: "none" },
                                // bgcolor: "red",
                                maxWidth: "500px",
                                margin: "0 auto",
                                justifyContent: "center",
                                flexGrow: 1,
                                mb: "2rem",
                            }}
                        >
                            <SignupForm />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "gray",
                                mt: "4rem",
                                position: "absolute",
                                bottom: 10,
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            © 2025 MorpicBrain INC. All Rights Reserved.
                        </Typography>{" "}
                    </Box>
                </Grid>
                <Grid
                    item
                    size={{ xs: 2, sm: 4, md: 6 }}
                    sx={{
                        // bgcolor: "red",
                        maxWidth: "500px",
                        margin: "0 auto",
                        justifyContent: "center",
                        flexGrow: 1,
                        display: { xs: "none", sm: "flex" },
                        p: "1rem",
                    }}
                >
                    <SignupForm />
                </Grid>
            </Grid>
        </div>
    );
}

export default Signup;
