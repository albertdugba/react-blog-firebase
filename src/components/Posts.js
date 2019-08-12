import React from "react";

import Post from "./Post";
import AddBlog from "./AddBlog";

const Posts = ({ posts, onCreate, onRemove }) => {
  return (
    <div>
      <AddBlog onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} key={post.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Posts;
