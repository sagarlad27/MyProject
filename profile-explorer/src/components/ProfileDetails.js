
import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photoUrl} alt={profile.name} />
      <p>Description: {profile.description}</p>
      <p>Address: {profile.address}</p>
      {/* Add more profile details here */}
    </div>
  );
};

export default ProfileDetails;
