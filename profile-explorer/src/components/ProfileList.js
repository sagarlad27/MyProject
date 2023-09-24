import React, { useState } from "react";
import ProfileSummary from "./ProfileSummary";
import ProfileDetails from "./ProfileDetails";

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null); // Initialize as null, not an empty array

  const handleViewDetails = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <div className="profile-list">
      {profiles ? (
        profiles.map((profile) => (
          <ProfileSummary
            key={profile.id}
            profile={profile}
            onViewDetails={() => handleViewDetails(profile)}
          />
        ))) : 
        (
          <div>Loading...</div>
        )
    }
      </div>
      {selectedProfile && (
        <ProfileDetails profile={selectedProfile} />
      )}
    </div>
  );
};

export default ProfileList;
