import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ReviewCard = ({ id, title, createdAt }) => {
  return (
    <div className="review">
      <div className="review-container">
        <div className="image"></div>
        <div className="review-container-content">
          <p className="date">{moment(createdAt.toDate()).calendar()}</p>
          <div className="title-link">
            <h2>{title}</h2>
            <Link to={`/reviews/${id}`}>Read Review</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCard.defaultProps = {
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

export default ReviewCard;
