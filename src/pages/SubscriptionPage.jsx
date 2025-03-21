import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SubscriptionPage = ({ userId }) => {
  const navigate = useNavigate();

  const handleSubscription = () => {
    axios.put("http://127.0.0.1:8000/users/update-subscription", {
      user_id: userId,
      action: "continue",
    }).then(() => {
      setTimeout(() => navigate("/download"), 3000); // Auto-redirect after success
    }).catch(() => alert("Error processing subscription"));
  };

  return (
    <div className="subscription-container">
      <h2>Subscribe to SuLynn</h2>
      <p>Get full access to SuLynn's powerful AI monitoring.</p>
      <button onClick={handleSubscription} className="subscribe-btn">Subscribe Now</button>
    </div>
  );
};

export default SubscriptionPage;
