import React from "react";
import { DeleteButton } from ".";

const SinglePost = ({ post, currentUser }) => {
  return (
    <div className="card">
      <h3 className="title"> Title: "{post.title}"</h3>{" "}
      <h4 className="description"> {post.description}</h4>{" "}
      <h3 className="price">{post.price}</h3>
      {post.author.username === currentUser.username ? (
        <DeleteButton post={post} />
      ) : null}
    </div>
  );
};

export default SinglePost;
