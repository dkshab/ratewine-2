import React from "react";
import { Link } from "react-router-dom";

//import { UserContext } from "../../providers/UserProvider";
//import withAuthorization from "../Session/withAuthorization";

const Reviews = () => {
  //const user = useContext(UserContext);
  //console.log(user);
  return (
    <div>
      <Link to="/">
        <h1 className="title">Application</h1>
      </Link>
      <h3 className="subtitle">All Reviews</h3>
    </div>
  );
};

export default Reviews;
