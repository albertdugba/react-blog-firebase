import React from "react";

import Post from "./Post";
import AddBlog from "./AddBlog";

const Posts = ({ posts, onCreate }) => {
  return (
    <div>
      <AddBlog onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
