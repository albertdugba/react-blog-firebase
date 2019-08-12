import React from "react";

import uuid from "uuid";
import moment from "moment";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

import { firestore } from "../database/firebase";

const Post = ({ id, title, body, user, createdAt, comments, likes }) => {
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();
  const like = () => postRef.update({ likes: likes + 1 });
  return (
    <article className="Post">
      <div className="Post--data">
        <h1>{title}</h1>
        <p>{body}</p>

        <div className="PostAction">
          <span>
            <FaComment style={{ color: "teal", cursor: "pointer" }} /> Comments:{" "}
            {comments}
          </span>
          <span>
            <FaRegThumbsUp
              onClick={like}
              style={{ color: "blue", cursor: "pointer" }}
            />{" "}
            Likes: {likes}
          </span>
          <span>
            <FaTrashAlt
              onClick={() => remove(id)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </span>
        </div>

        <div className="Post-author">
          <p>
            {" "}
            <FaUser />
            Posted by : {user.displayName}
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
  createdAt: new Date(),
  comments: 21,
  likes: 2
};

export default Post;
