
import React, { useState } from "react";
import Map from "./Map"; // Import the Map component

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <div className="profile-card">
      {/* ... (other profile details) */}
      <button onClick={handleShowMap}>Summary</button>

      {showMap && (
        <div className="map-container">
          {/* Pass the profile's address to the Map component */}
          <Map address={profile.address} />
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
