import { getPosts } from "../api";
import { SinglePost } from ".";
import "./Posts.css";
import { Link } from "react-router-dom";

const Posts = ({ allPosts, filterPosts }) => {
  return (
    <div>
      {filterPosts && filterPosts.length
        ? filterPosts.map((post) => {
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} />
              </Link>
            );
          })
        : allPosts && allPosts.length
        ? allPosts.map((post) => {
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} />
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
