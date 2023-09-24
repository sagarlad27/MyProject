
import React from "react";
import { deleteProfile } from "../services/profileService";

const ProfileDeleteButton = ({ profileId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteProfile(profileId);
      onDelete();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default ProfileDeleteButton;

