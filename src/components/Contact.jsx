import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "./forms/ContactForm";
import { NavLink } from "react-router-dom";
export default function Contact() {
    return (
        <>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ maxWidth: "1100px", marginX: "auto", mt: "40px" }}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{ my: 8, textAlign: { xs: "center", md: "left" } }}
                    >
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            Phone: 123-456-7890
                        </Typography>
                        <Typography variant="body2">
                            Email:{" "}
                            <a href="mailto:info@sulynn-ai.com">
                                info@sulynn-ai.com
                            </a>
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Social Media
                        </Typography>
                        <IconButton size="large" sx={{ color: "#fff" }}>
                            <FacebookIcon fontSize="32px" />
                        </IconButton>
                        <IconButton size="large" sx={{ color: "#fff" }}>
                            <XIcon fontSize="32px" />
                        </IconButton>
                        <NavLink
                            target="_blank"
                            to="https://www.linkedin.com/in/morphicbrain/"
                        >
                            <IconButton size="large" sx={{ color: "#fff" }}>
                                <LinkedInIcon fontSize="32px" />
                            </IconButton>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <ContactForm />
                </Grid>
            </Grid>
        </>
    );
}
