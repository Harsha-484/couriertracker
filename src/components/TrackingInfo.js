import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
const TrackingInfo = () => {
  const { trackingNumber } = useParams();
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrackingInfo = async () => {
      try {
        if (trackingNumber === "1234") {
          const deliveryInfo = {
            trackingNumber: "1234",
            status: "In Transit",
            steps: [
              {
                step: 1,
                description: "Package picked up",
                location: "Tenali",
              },
              {
                step: 2,
                description: "In transit to sorting facility",
                location: "Tenali",
              },
              {
                step: 3,
                description: "Sorting and processing",
                location: "Sorting Facility",
              },
              {
                step: 4,
                description: "Out for delivery",
                location: "Local Distribution Center",
              },
              {
                step: 5,
                description: "Arrived at destination city",
                location: "Guntur",
              },
              {
                step: 6,
                description: "Out for local delivery",
                location: "Guntur",
              },
              { step: 7, description: "Delivered", location: "Recipient" },
            ],
            carrier: "XYZ Courier",
          };
          setTrackingData(deliveryInfo);
        } else {
          const response = await axios.get(
            `http://localhost:3001/api/tracking/${trackingNumber}`
          );
          setTrackingData(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tracking information", error);
        setError("Error fetching tracking information");
        setLoading(false);
      }
    };

    fetchTrackingInfo();
  }, [trackingNumber]);

  return (
    <div className="container">
      <div className="header">
        <h2>Tracking Information</h2>
      </div>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && trackingData ? (
        <div className="tracking-info">
          <p>Tracking Number: {trackingData.trackingNumber}</p>
          <p>Status: {trackingData.status}</p>
          <h3>Delivery Steps:</h3>
          <ul>
            {trackingData.steps.map((step) => (
              <li key={step.step}>
                Step {step.step}: {step.description} - {step.location}
              </li>
            ))}
          </ul>
          <p>Carrier: {trackingData.carrier}</p>
        </div>
      ) : (
        <p>No tracking information found for {trackingNumber}</p>
      )}
    </div>
  );
};

export default TrackingInfo;
