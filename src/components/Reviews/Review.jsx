import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { firestore } from "../../firebase";
import { Link } from "react-router-dom";
import moment from "moment";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;

  return currentUser.uid === postAuthor.uid;
};

const Review = ({ id, title, content, createdAt, user, stars, comments }) => {
  const currentUser = useContext(UserContext);

  const reviewRef = firestore.doc(`reviews/${id}`);
  const remove = () => {
    reviewRef.delete();
  };
  const star = () => reviewRef.update({ stars: stars + 1 });

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          <Link to={`/reviews/${id}`}>{title}</Link>
        </p>
      </header>
      <div className="card-content">
        <div className="content">{content}</div>
      </div>
      <footer className="card-footer">
        <p>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          {stars}
        </p>
        <p>
          <span role="img" aria-label="comments">
            🙊
          </span>
          {comments}
        </p>
        &nbsp;
        <p>Posted by {user.displayName}</p>
        &nbsp;
        <p>{moment(createdAt.toDate()).calendar()}</p>
        &nbsp;&nbsp;
        <button className="button is-success" onClick={star}>
          Star
        </button>
        &nbsp;
        {belongsToCurrentUser(currentUser, user) && (
          <button className="button is-danger" onClick={remove}>
            Delete
          </button>
        )}
      </footer>
    </div>
  );
};

Review.defaultProps = {
  title: "An Incredibly Hot Take",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.",
  user: {
    id: "123",
    displayName: "Bill Murray",
    email: "billmurray@mailinator.com",
    photoURL: "https://www.fillmurray.com/300/300"
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0
};

export default Review;
