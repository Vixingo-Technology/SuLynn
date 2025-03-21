import React, { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&vault=true&intent=subscription";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.paypal.Buttons({
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            plan_id: "P-XXXXXXXXXXX" // Replace with actual PayPal Plan ID
          });
        },
        onApprove: function (data, actions) {
          alert("Subscription successful! Your ID: " + data.subscriptionID);
        }
      }).render("#paypal-button-container");
    };
  }, []);

  return (
    <div className="container">
      <h2>Subscription Plan</h2>
      <p>Start with a 7-day free trial, then continue for just <strong>$49/month</strong>.</p>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default Pricing;
