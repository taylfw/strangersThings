import React from "react";
import { DeleteButton } from ".";
import { message } from "../api";
import { Messages } from ".";

const SinglePost = ({ post, currentUser }) => {
  const messageArr = post.messages;
  const id = post._id;

  console.log(currentUser);
  return (
    <div className="card">
      <h3 className="Title">Title:"{post.title}"</h3>{" "}
      <h4 className="description">{post.description}</h4>{" "}
      <h3 className="price">{post.price}</h3>
      {post.author.username === currentUser.username ? (
        <DeleteButton post={post} />
      ) : (
        <Messages messageArr={messageArr} id={id} />
      )}
      {post.author.username === currentUser.username ? (
        <p>hello</p>
      ) : // messageArr.map((comment) => {
      //     <p>{comment}</p>;
      //   })
      null}
    </div>
  );
};

export default SinglePost;
