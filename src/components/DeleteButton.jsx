import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { deletePost } from "../api";

const DeleteButton = ({ post }) => {
  return <button onClick={deletePost(post)}>Delete Post</button>;
};

export default DeleteButton;
