import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Comments = ({ comments, onCreate }) => {
  return (
    <div className="Comments">
      <AddComment onCreate={onCreate} />
      <h3>Comments</h3>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
