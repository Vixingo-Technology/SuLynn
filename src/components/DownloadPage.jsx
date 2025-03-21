import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        setHasSubscription(response.data.subscription_status === "Active");
      }
    } catch (error) {
      console.error("Error checking subscription:", error);
      setIsAuthenticated(false);
      setHasSubscription(false);
    }

    setLoading(false);
  };

  return (
    <div className="download-container">
      <h2>Download SuLynn Browser Extension</h2>

      {loading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        hasSubscription ? (
          <div>
            <p>Thank you for subscribing! Click below to download the extension:</p>
            <a href="/downloads/SuLynn_Browser_Extension.zip" download>
              <button className="download-btn">Download Now</button>
            </a>
          </div>
        ) : (
          <div>
            <p>🚨 You must have an active subscription to download the extension.</p>
            <button className="subscribe-btn" onClick={() => navigate("/pricing")}>
              Subscribe Now
            </button>
          </div>
        )
      ) : (
        <div>
          <p>🚨 Please log in to access the download.</p>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadPage;
