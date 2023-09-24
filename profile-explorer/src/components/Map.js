import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const Map = ({ address }) => {
  useEffect(() => {
    // Create a map and specify the target HTML element
    const map = L.map("map").setView([0, 0], 13);

    // Add the OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map);

    // Add a marker for the provided address
    if (address) {
      L.marker(address).addTo(map);
    }
  }, [address]);

  return <div id="map" style={{ height: "400px" }}></div>;
};

export default Map;
