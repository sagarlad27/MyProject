
import React, { useState } from "react";
import ProfileSummary from "./ProfileSummary";
import ProfileDetails from "./ProfileDetails"; // Import the ProfileDetails component

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  if (!profiles) {
    return <div>Loading...</div>; // or handle the loading state as needed
  }
  // Function to handle "View Details" click
  const handleViewDetails = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileSummary
            key={profile.id}
            profile={profile}
            onViewDetails={() => handleViewDetails(profile)} // Pass the profile to handleViewDetails
          />
        ))}
      </div>
      {selectedProfile && (
        <ProfileDetails profile={selectedProfile} /> // Display ProfileDetails if a profile is selected
      )}
    </div>
  );
};

export default ProfileList;
