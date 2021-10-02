import { getPosts } from "../api";
import { SinglePost } from ".";
import "./Posts.css";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const { allPosts } = props;

  return (
    <div>
      {allPosts.length
        ? allPosts.map((post) => {
            console.log(post);
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} />;
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
