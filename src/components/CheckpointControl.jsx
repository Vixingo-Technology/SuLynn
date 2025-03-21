import React, { useState, useEffect } from "react";
import axios from "axios";

const CheckpointControl = () => {
  const [checkpoints, setCheckpoints] = useState([]);

  useEffect(() => {
    fetchCheckpoints();
  }, []);

  const fetchCheckpoints = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/checkpoints");
      setCheckpoints(response.data);
    } catch (error) {
      console.error("Error fetching checkpoints:", error);
    }
  };

  const restoreLastCheckpoint = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/checkpoints/restore");
      fetchCheckpoints();
    } catch (error) {
      console.error("Error restoring checkpoint:", error);
    }
  };

  const clearCheckpoints = async () => {
    try {
      await axios.delete("http://127.0.0.1:8000/checkpoints/reset");
      setCheckpoints([]);
    } catch (error) {
      console.error("Error clearing checkpoints:", error);
    }
  };

  return (
    <div className="checkpoint-container">
      <h2>Checkpoint History</h2>
      <ul>
        {checkpoints.map((checkpoint, index) => (
          <li key={index}>{checkpoint.description} - {checkpoint.timestamp}</li>
        ))}
      </ul>
      <button onClick={restoreLastCheckpoint}>Restore Last Checkpoint</button>
      <button onClick={clearCheckpoints}>Clear All</button>
    </div>
  );
};

export default CheckpointControl;
