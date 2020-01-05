import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import * as ROUTES from "../../constants/routes";
import { UserContext } from "../../providers/UserProvider";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    state = { user: JSON.parse(localStorage.getItem("authUser")) };
    componentDidMount() {
      const { user } = this.state;

      if (!condition(user)) {
        this.props.history.push(ROUTES.SIGNIN);
      }
    }

    render() {
      //console.log(this.state);
      return (
        <UserContext.Consumer>
          {user =>
            condition(user) ? <Component user={user} {...this.props} /> : null
          }
        </UserContext.Consumer>
      );
    }
  }

  return compose(withRouter)(WithAuthorization);
};

export default withAuthorization;
