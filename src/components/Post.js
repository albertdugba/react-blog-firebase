import React from "react";
import uuid from "uuid";
import moment from "moment";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Post = ({ title, body, displayName, createdAt }) => {
  return (
    <article className="Post">
      <div className="Post--data">
        <h1>{title}</h1>
        <p>{body}</p>

        <div className="PostAction">
          <button>Delete</button>
          <button>Star</button>
        </div>

        <div className="Post-author">
          <p>
            {" "}
            <FaUser />
            Posted by : {displayName}
          </p>
          <span>
            <FaClock />
            {moment(createdAt).calendar()}
          </span>
        </div>
      </div>
    </article>
  );
};

Post.defaultProps = {
  title: "Another incredible  blog post",
  body: "I am off to a great start on becoming a seasoned developer",
  user: {
    id: uuid(),
    displayName: "Evan Yhu",
    email: "evan@vuemail.com",
    photoURL: "https://www.fillmurray.com/300/300"
  },
  createdAt: new Date()
};

export default Post;
