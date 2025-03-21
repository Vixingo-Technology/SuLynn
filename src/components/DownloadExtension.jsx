import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstallPopup from "./InstallPopup";
import axios from "axios";

const DownloadExtension = ({ userId }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Check subscription status
    axios.get(`http://127.0.0.1:8000/users/${userId}`)
      .then(response => {
        if (response.data.subscription_status === "Active") {
          setIsSubscribed(true);
        }
      })
      .catch(() => {
        setIsSubscribed(false);
      });
  }, [userId]);

  const handleDownload = () => {
    if (isSubscribed) {
      window.location.href = `http://127.0.0.1:8000/download-extension/${userId}`;
      setTimeout(() => setShowPopup(true), 3000); // Auto-show install guide after download
    } else {
      navigate("/subscribe");
    }
  };

  return (
    <div className="download-container">
      <h2>Download SuLynn Browser Extension</h2>
      <p>Enhance your AI experience with real-time SuLynn monitoring.</p>
      <button onClick={handleDownload} className="download-btn">Download Now</button>
      {showPopup && <InstallPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default DownloadExtension;
