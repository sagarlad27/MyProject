// src/components/Map.js

import React, { useEffect, useState } from "react";

const Map = ({ address }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 10,
      });

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;
          new window.google.maps.Marker({
            position: location,
            map,
            title: address,
          });
          map.setCenter(location);
          setLoading(false); // Set loading to false once the map is loaded
        } else {
          setError("Error loading map or geocoding the address.");
          setLoading(false); // Set loading to false on error
          console.error("Geocode was not successful for the following reason: " + status);
        }
      });
    };

    script.onerror = () => {
      setError("Error loading Google Maps API.");
      setLoading(false); // Set loading to false on error
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [address]);

  return (
    <div>
      {loading ? (
        <div className="loading-indicator">
          <div className="progress-bar"></div>
          Loading Map...
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
      )}
    </div>
  );
};

export default Map;
