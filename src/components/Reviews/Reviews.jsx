import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ReviewsContext } from "../../providers/ReviewsProvider";
import Review from "./Review";
import withAuthorization from "../Session/withAuthorization";
import * as ROUTES from "../../constants/routes";

const Reviews = () => {
  const reviews = useContext(ReviewsContext);
  //console.log(reviews);
  return (
    <section>
      <Link to={ROUTES.ADDREVIEW} className="button is-link">
        <p>Add Review!</p>
      </Link>
      <hr />
      <br />
      {reviews.map(review => (
        <Review {...review} key={review.id} id={review.id} />
      ))}
    </section>
  );
};
const condition = user => user != null;

export default withAuthorization(condition)(Reviews);
