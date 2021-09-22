import { getPosts } from "../api";

const Posts = (props) => {
  const { allPosts } = props;

  return (
    <div>
      <div>
        {allPosts
          ? allPosts.map((post) => {
              return (
                <div key={post._id}>
                  title: {post.title} {post.description} {post.price}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Posts;
