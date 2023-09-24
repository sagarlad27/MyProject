
import React, { useState } from "react";
import { addProfile, updateProfile } from "../services/profileService";

const ProfileAddEditForm = ({ profile, onSave }) => {
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      if (formData.id) {
        // Edit existing profile
        await updateProfile(formData);
      } else {
        // Add new profile
        await addProfile(formData);
      }
      onSave();
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div>
      <h2>{formData.id ? "Edit Profile" : "Add Profile"}</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileAddEditForm;
