import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Review = ({ id, title, createdAt }) => {
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

Review.defaultProps = {
  title: "A Great Review",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.",
  user: {
    id: "123",
    displayName: "One",
    email: "one@one.com",
    photoURL: "https://www.fillmurray.com/300/300"
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0
};

export default Review;
