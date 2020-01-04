import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || "name";
};

const withUser = Component => {
  const WrappedComponent = props => {
    const user = useContext(UserContext);
    console.log(user);
    if (!user) {
      props.history.push(ROUTES.SIGNIN);
    }
    return (
      <UserContext.Consumer>
        {user => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };

  WrappedComponent.displayName = `WithUser(${getDisplayName(
    WrappedComponent
  )})`;

  return withRouter(WrappedComponent);
};

export default withUser;
