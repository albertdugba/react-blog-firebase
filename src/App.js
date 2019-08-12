import React, { Component } from "react";

import Posts from "./components/Posts";
import { firestore } from "./database/firebase";
import { collectIdsAndDocs } from "./config/utils";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    const snapshot = await firestore.collection("posts").get();
    const posts = snapshot.docs.map(collectIdsAndDocs);

    this.setState({ posts });
  };

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection("posts").add(post);
    const doc = await docRef.get();
    const newPost = collectIdsAndDocs(doc);
    this.setState({ posts: [...posts, newPost] });
  };

  handleRemove = async id => {
    const allPosts = this.state.posts.filter(post => post.id !== id);
    await firestore.doc(`posts/${id}`).delete();

    this.setState({ posts: allPosts });
    console.log(allPosts);
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog Application</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
