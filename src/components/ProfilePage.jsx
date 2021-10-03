import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Posts, SinglePost } from ".";
import { getCurrentUser } from "../api";
import "./Posts.css";

const ProfilePage = ({
  SetCurrentUser,
  currentUser,
  allPosts,
  filterPosts,
}) => {
  console.log(currentUser);
  return (
    <div>
      <h1 className="hello">Welcome, {currentUser.username}!</h1>
      <h2 className="hello"> Your user ID is {currentUser._id}</h2>
      {allPosts.map((post) => {
        if (post.author.username === currentUser.username) {
          console.log(post);

          return (
            <div key={post._id}>
              <SinglePost post={post} currentUser={currentUser} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProfilePage;
