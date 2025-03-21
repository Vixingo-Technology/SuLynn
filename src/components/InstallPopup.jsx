import React from "react";

const InstallPopup = ({ onClose }) => {
  return (
    <div className="install-popup">
      <div className="popup-content">
        <h3>How to Install SuLynn Extension</h3>
        <ol>
          <li>Unzip the downloaded file.</li>
          <li>Open Chrome and go to <strong>chrome://extensions</strong>.</li>
          <li>Enable <strong>Developer Mode</strong> (top right corner).</li>
          <li>Click <strong>Load Unpacked</strong> and select the unzipped folder.</li>
          <li>Enjoy AI-enhanced responses with SuLynn!</li>
        </ol>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default InstallPopup;
