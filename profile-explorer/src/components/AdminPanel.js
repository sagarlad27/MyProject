
import React, { useState, useEffect } from "react";
import { getAllProfiles, addProfile, editProfile, deleteProfile } from "../services/profileService";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", address: "", photoUrl: "" });
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    // Fetch profiles from your backend service or database
    const fetchData = async () => {
      const data = await getAllProfiles();
      setProfiles(data);
    };

    fetchData();
  }, []);

  const handleAddProfile = async () => {
    const newProfile = await addProfile(formData);
    setProfiles([...profiles, newProfile]);
    setFormData({ name: "", description: "", address: "", photoUrl: "" });
  };

  const handleEditProfile = async () => {
    if (!selectedProfile) return;
    const editedProfile = await editProfile(selectedProfile.id, formData);
    const updatedProfiles = profiles.map((profile) =>
      profile.id === editedProfile.id ? editedProfile : profile
    );
    setProfiles(updatedProfiles);
    setSelectedProfile(null);
    setFormData({ name: "", description: "", address: "", photoUrl: "" });
  };

  const handleDeleteProfile = async () => {
    if (!selectedProfile) return;
    await deleteProfile(selectedProfile.id);
    const updatedProfiles = profiles.filter((profile) => profile.id !== selectedProfile.id);
    setProfiles(updatedProfiles);
    setSelectedProfile(null);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="admin-form">
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Description:</label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <label>Address:</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <label>Photo URL:</label>
        <input
          type="text"
          value={formData.photoUrl}
          onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
        <button onClick={handleEditProfile}>Edit Profile</button>
        <button onClick={handleDeleteProfile}>Delete Profile</button>
      </div>
      <div className="profile-list">
        <h3>Profiles</h3>
        <ul>
          {profiles.map((profile) => (
            <li
              key={profile.id}
              onClick={() => {
                setSelectedProfile(profile);
                setFormData({ ...formData, ...profile });
              }}
            >
              {profile.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
