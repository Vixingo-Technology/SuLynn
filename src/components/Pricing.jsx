import React, { useEffect } from "react";
import PriceCard from "./cards/PriceCard";
import { Box, Typography } from "@mui/material";

const Pricing = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&vault=true&intent=subscription";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.paypal
                .Buttons({
                    createSubscription: function (data, actions) {
                        return actions.subscription.create({
                            plan_id: "P-XXXXXXXXXXX", // Replace with actual PayPal Plan ID
                        });
                    },
                    onApprove: function (data, actions) {
                        alert(
                            "Subscription successful! Your ID: " +
                                data.subscriptionID
                        );
                    },
                })
                .render("#paypal-button-container");
        };
    }, []);

    return (
        <Box sx={{ maxWidth: "1440px", padding: "20px" }}>
            <Typography variant="h4" align="center" sx={{ mt: 5, mb: 5 }}>
                Subscription Plan
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                }}
            >
                <PriceCard
                    title={"Essentials"}
                    description={"For projects with higher production demands."}
                    price={"49"}
                    btnText={"Get Started"}
                    features={[
                        "Standard Adaptive AI Module",
                        "Limited to 2 users",
                        "Standard Data Storage",
                        "Standard Data Processing",
                    ]}
                />
                <PriceCard
                    title={"Professional"}
                    description={
                        "Best for teams and projects that need added security."
                    }
                    price={"249"}
                    btnText={"Get Started"}
                    features={[
                        "Standard Adaptive AI Module",
                        "Limited to 10 users",
                        "Standard Data Storage",
                        "Standard Data Processing",
                        "Enhanced Computer Vision",
                    ]}
                />
                <PriceCard
                    title={"Enterprise"}
                    description={
                        "For enterprises that need to scale. Top-tier SLAs, advanced security, white-glove support and more."
                    }
                    btnText={"Contact Sales"}
                    features={[
                        "Standard Adaptive AI Module",
                        "Up to 10 users",
                        "Standard Data Storage",
                        "Standard Data Processing",
                    ]}
                />
            </Box>
            <div id="paypal-button-container"></div>
        </Box>
    );
};

export default Pricing;
