import React, { Component } from "react";
import withAuthorization from "../Session/withAuthorization";

class UserProfile extends Component {
  render() {
    console.log(this.props);
    return <div>Profile Page!</div>;
  }
}

const condition = user => user != null;

export default withAuthorization(condition)(UserProfile);
