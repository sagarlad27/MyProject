const mockProfiles = [
  {
    id: 1,
    name: "John Cena",
    photoUrl: "https://example.com/john.jpg",
    description: "Web Developer",
    address: "123 Main St, City, Country",
  },
  {
    id: 2,
    name: "Kevin Piterson",
    photoUrl: "https://example.com/Kevin.jpg",
    description: "UX Designer",
    address: "456 Elm St, Town, Country",
  },
  
];

// Function to fetch all profiles
export const getAllProfiles = () => {
  return Promise.resolve(mockProfiles);
};

// Function to fetch a single profile by ID
export const getProfileById = (id) => {
  const profile = mockProfiles.find((p) => p.id === id);
  return Promise.resolve(profile);
};

// Function to update an existing profile by ID
 export const editProfile = (id, updatedProfile) => {
  const index = mockProfiles.findIndex((profile) => profile.id === id);

  if (index !== -1) {
    // Update the profile if found
    mockProfiles[index] = { ...mockProfiles[index], ...updatedProfile };
    return mockProfiles[index];
  } else {
    throw new Error("Profile not found"); // Handle the case when the profile is not found
  }
};

// Function to add a new profile
export const addProfile = (profile) => {
  profile.id = mockProfiles.length + 1; // Assign a new ID (in a real app, this would be generated on the server)
  mockProfiles.push(profile);
  return Promise.resolve(profile);
};

 // Function to update an existing profile by ID
//   export const editProfile = (id, updatedProfile) => {
//   const index = profile.findIndex((profile) => profile.id === id);

//   if (index !== -1) {
//     // Update the profile if found
//     profile[index] = { ...profile[index], ...updatedProfile };
//     return profile[index];
//   } else {
//     throw new Error("Profile not found"); // Handle the case when the profile is not found
//   }
// };

// Function to update an existing profile
export const updateProfile = (profile) => {
  const index = mockProfiles.findIndex((p) => p.id === profile.id);
  if (index !== -1) {
    mockProfiles[index] = profile;
    return Promise.resolve(profile);
  } else {
    return Promise.reject(new Error("Profile not found"));
  }
};

// Function to delete a profile by ID
export const deleteProfile = (id) => {
  const index = mockProfiles.findIndex((p) => p.id === id);
  if (index !== -1) {
    const deletedProfile = mockProfiles.splice(index, 1)[0];
    return Promise.resolve(deletedProfile);
  } else {
    return Promise.reject(new Error("Profile not found"));
  }
};