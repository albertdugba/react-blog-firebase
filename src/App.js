import React, { Component } from "react";

import Posts from "./components/Posts";
import { firestore } from "./database/firebase";
import { collectIdsAndDocs } from "./config/utils";

class App extends Component {
  state = {
    posts: []
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });

    // this.setState({ posts });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog Application</h1>
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
