import React from "react";

const SinglePost = ({ post, currentUser }) => {
  return (
    <div className="card">
      <h3 className="title"> Title: "{post.title}"</h3>{" "}
      <h4 className="description"> {post.description}</h4>{" "}
      <h3 className="price">{post.price}</h3>
      <h3 className="description">{post.author.username}</h3>
    </div>
  );
};

export default SinglePost;
