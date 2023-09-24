// src/App.js

import React from "react";
import ProfileList from "./components/ProfileList";
import AdminPanel from "./components/AdminPanel"; // Import the AdminPanel component
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfileList />
        <AdminPanel /> {/* Include the AdminPanel component */}
      </div>
    </div>
  );
}

export default App;
