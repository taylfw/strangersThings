import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../api";

const ProfilePage = ({ SetCurrentUser, currentUser }) => {
  return (
    <div>
      <h1>{currentUser}'s</h1>
    </div>
  );
};

export default ProfilePage;
