import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ReviewsContext } from "../../providers/ReviewsProvider";
import withAuthorization from "../Session/withAuthorization";
import * as ROUTES from "../../constants/routes";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = useContext(ReviewsContext);
  //console.log(reviews);
  return (
    <div className="reviews-page">
      <Link to={ROUTES.ADDREVIEW} className="button is-link">
        <p>Add Review!</p>
      </Link>
      <hr />
      {reviews.map(review => (
        <ReviewCard {...review} key={review.id} id={review.id} />
      ))}
    </div>
  );
};
const condition = user => user != null;

export default withAuthorization(condition)(Reviews);
