import React from "react";

const ProfileSummary = ({ profile, onViewDetails }) => {
  return (
    <div className="profile-summary">
      <img src={profile.photoUrl} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onViewDetails(profile)}>View Details</button>
    </div>
  );
};

export default ProfileSummary;