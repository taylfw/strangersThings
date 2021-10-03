import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { deletePost } from "../api";

const DeleteButton = ({ post }) => {
  return (
    <button
      onClick={async (event) => {
        event.preventDefault();
        try {
          await deletePost(post);
          console.log("clicked");
        } catch (err) {
          console.log(err);
        }
      }}
    >
      Delete Post
    </button>
  );
};

export default DeleteButton;
