import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SinglePost } from ".";
import { getCurrentUser } from "../api";
import "./Posts.css";

const ProfilePage = ({
  SetCurrentUser,
  currentUser,
  allPosts,
  filterPosts,
}) => {
  return (
    <div>
      <h1 className="hello">Welcome, {currentUser.username}!</h1>
      <h2 className="hello"> Your user ID is {currentUser._id}</h2>
      {allPosts.map((post) => {
        if (post.author.username === currentUser.username) {
          return <SinglePost post={post} currentUser={currentUser} />;
        }
      })}
    </div>
  );
};

export default ProfilePage;
