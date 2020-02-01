import React from "react";
import moment from "moment";

const Comment = ({ content, user, createdAt }) => {
  return (
    <article className="message">
      <div className="message-header">
        <p>{user.displayName}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {content}
        <p>{moment(createdAt).calendar()}</p>
      </div>
    </article>
  );
};

Comment.defaultProps = {
  title: "An Incredibly Hot Take",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.",
  user: {
    displayName: "Bill Murray",
    email: "billmurray@mailinator.com",
    photoURL: "https://www.fillmurray.com/300/300"
  },
  createdAt: new Date()
};

export default Comment;
