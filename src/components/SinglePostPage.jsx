import React from "react";
import { useParams } from "react-router";
import { SinglePost } from ".";
import "./Posts.css";

const SinglePostPage = ({ allPosts }) => {
  const { postId } = useParams();

  const myPost = allPosts.find((post) => {
    if (post._id === postId) {
      return true;
    } else {
      return false;
    }
  });

  if (!myPost) {
    return (
      <div className="error-message">
        <h1>POST {postId} WAS NOT FOUND ON THIS SPOOKY WEBZONE</h1>
      </div>
    );
  }

  return (
    <div>
      <SinglePost post={myPost} />
    </div>
  );
};

export default SinglePostPage;
