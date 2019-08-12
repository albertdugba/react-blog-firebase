import React from "react";

import Post from "./Post";
import AddBlog from "./AddBlog";

const Posts = ({ posts }) => {
  return (
    <div>
      <AddBlog />
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
