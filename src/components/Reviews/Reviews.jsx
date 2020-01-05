import React from "react";
import { Link } from "react-router-dom";

import withAuthorization from "../Session/withAuthorization";

const Reviews = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="title">Application</h1>
      </Link>
      <h3 className="subtitle">All Reviews</h3>
    </div>
  );
};

const condition = user => user != null;

export default withAuthorization(condition)(Reviews);
