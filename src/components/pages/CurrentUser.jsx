import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  //console.log(photoURL);

  return (
    <div className="user-profile">
      <div className="user-profile__username">
        <h2>{email}</h2>
        <p>
          <span>6</span> posts
        </p>
        <p>
          <span>22</span> followers
        </p>
        <p>
          <span>1999</span> following
        </p>
      </div>
      <div className="user-profile__avatar">
        <img src={photoURL} alt={displayName} />
      </div>
      <p className="user-profile__bio">
        Is a person{" "}
        <Link to={ROUTES.PROFILE}>
          <p>Update details</p>
        </Link>
      </p>
    </div>
  );
};

CurrentUser.defaultProps = {
  displayName: "Bill Murray",
  email: "billmurray@mailinator.com",
  photoURL: "https://www.fillmurray.com/300/300",
  createdAt: new Date()
};

export default CurrentUser;
