import React, { Component } from "react";
import uuid from "uuid";

import "../App.css";
import { firestore } from "../database/firebase";

class AddBlog extends Component {
  state = { title: "", body: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;

    const post = {
      title,
      body,
      user: {
        id: uuid(),
        displayName: "Steve Kinney",
        email: "stevekinney@sendgrid.com",
        photoURL: "http://placekitten.com/g/200/200"
      }
    };

    firestore.collection("posts").add(post);
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <label htmlFor="title">Body</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChange}
          />

          <label htmlFor="submit" />
          <button className="btn">Create Post</button>
        </form>
      </div>
    );
  }
}

export default AddBlog;
