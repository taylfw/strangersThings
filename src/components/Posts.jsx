import { getPosts } from "../api";
import "./Post.css";
const Posts = (props) => {
  const { allPosts } = props;

  return (
    <div>
      {allPosts
        ? allPosts.map((post) => {
            return (
              <div key={post._id} className="card">
                title: {post.title} {post.description} {post.price}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Posts;
