import { getPosts } from "../api";
import { SinglePost } from ".";
import "./Posts.css";
import { Link } from "react-router-dom";

const Posts = ({ allPosts, filterPosts, currentUser }) => {
  return (
    <div>
      {filterPosts && filterPosts.length
        ? filterPosts.map((post) => {
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} currentUser={currentUser} />;
              </Link>
            );
          })
        : allPosts && allPosts.length
        ? allPosts.map((post) => {
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} currentUser={currentUser} />;
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
