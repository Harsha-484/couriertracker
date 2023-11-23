// components/TrackingForm.js
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const TrackingForm = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/tracking/${trackingNumber}`);
  };

  return (
    <div>
      <h2 class="de">Tracking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tracking Number:
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </label>
        <button type="submit">Track Package</button>

        {/* Add a link to the Admin Panel */}
        <Link to="/admin">Go to Admin Panel</Link>
      </form>
    </div>
  );
};

export default TrackingForm;
