import React, { Component } from "react";
import uuid from "uuid";

import Posts from "./components/Posts";
import { firestore } from "./database/firebase";

class App extends Component {
  state = {
    posts: [
      {
        id: uuid(),
        title: "A Very Hot Take",
        body:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
        user: {
          uid: "123",
          displayName: "Bill Murray",
          email: "billmurray@mailinator.com",
          photoURL: "https://www.fillmurray.com/300/300"
        },
        createdAt: new Date(),
        likes: 1,
        comments: 47
      },
      {
        id: uuid(),
        title: "The Sauciest of Opinions",
        body:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
        user: {
          uid: "456",
          displayName: "Mill Burray",
          email: "notbillmurray@mailinator.com",
          photoURL: "https://www.fillmurray.com/400/400"
        },
        createdAt: new Date(),
        likes: 3,
        comments: 0
      }
    ]
  };

  componentDidMount = async () => {
    const data = await firestore.collection("posts").get();
    data.forEach(doc => {
      const id = doc.id;
      const data = doc.data();
      console.log({ id, data });
    });
    // this.setState({ posts: data });
  };

  handleCreate = post => {
    const { posts } = this.state;
    this.setState({ posts: [...posts, post] });
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Blog Application</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
