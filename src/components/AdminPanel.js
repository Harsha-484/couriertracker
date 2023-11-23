// components/AdminPanel.js
import React, { useState } from "react";

const AdminPanel = () => {
  const [trackingData, setTrackingData] = useState([
    {
      _id: "1",
      trackingNumber: "1234",
      status: "In Transit",
      location: "Origin City",
    },
    // Add more tracking entries as needed
  ]);

  const [newTracking, setNewTracking] = useState({
    trackingNumber: "",
    status: "",
    location: "",
  });

  const handleAddTracking = () => {
    // Validate that all fields are filled
    if (
      newTracking.trackingNumber &&
      newTracking.status &&
      newTracking.location
    ) {
      // Create a new tracking entry
      const newEntry = {
        _id: String(Math.random()), // For simplicity, use a random string as the ID
        ...newTracking,
      };

      // Update the state with the new entry
      setTrackingData([...trackingData, newEntry]);

      // Clear the form
      setNewTracking({
        trackingNumber: "",
        status: "",
        location: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeleteTracking = (id) => {
    // Filter out the entry with the specified ID
    const updatedTrackingData = trackingData.filter(
      (tracking) => tracking._id !== id
    );

    // Update the state with the filtered data
    setTrackingData(updatedTrackingData);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Add Tracking Information</h3>
        <label>
          Tracking Number:
          <input
            type="text"
            value={newTracking.trackingNumber}
            onChange={(e) =>
              setNewTracking({ ...newTracking, trackingNumber: e.target.value })
            }
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            value={newTracking.status}
            onChange={(e) =>
              setNewTracking({ ...newTracking, status: e.target.value })
            }
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={newTracking.location}
            onChange={(e) =>
              setNewTracking({ ...newTracking, location: e.target.value })
            }
          />
        </label>
        <button onClick={handleAddTracking}>Add Tracking</button>
      </div>
      <div>
        <h3>Tracking Information List</h3>
        <ul>
          {trackingData.map((tracking) => (
            <li key={tracking._id}>
              {tracking.trackingNumber} - {tracking.status} -{" "}
              {tracking.location}{" "}
              <button onClick={() => handleDeleteTracking(tracking._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
