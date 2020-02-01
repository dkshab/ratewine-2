import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { auth, createUserProfileDocument } from "../../firebase";
import * as ROUTES from "../../constants/routes";

class SignUp extends Component {
  state = { displayName: "", email: "", password: "", error: null };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password, displayName } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName }).then(() => {
        this.props.history.push(ROUTES.HOME);
      });
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  };
  render() {
    const { displayName, email, password, error } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="title">Sign Up</h2>
          <div>
            <label>Display Name</label>
            <input
              className="text-input"
              type="text"
              name="displayName"
              placeholder="Enter Your Display Name"
              required
              value={displayName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="text-input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="text-input"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input className="button button-sign" type="submit" value="Sign Up" />
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
