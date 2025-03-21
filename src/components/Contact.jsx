// File Path: C:\SuLynn\dashboard\public_site\src\components\Contact.js

import React, { useState } from "react";
import "../styles.css";
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    padding: "3rem 3rem ",
                    border: "1px solid #ffffff30",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff10",
                    margin: "3rem",
                }}
            >
                {success && <p className="success-message">{success}</p>}
                <Typography variant="h4">Get in Touch</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="standard"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        Send Message{" "}
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default Contact;
