import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { auth, signInWithGoogle } from "../../firebase";
import * as ROUTES from "../../constants/routes";

class SignIn extends Component {
  state = { email: "", password: "", error: null };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        this.props.history.push(ROUTES.HOME);
      });
    } catch (error) {
      console.error(error);
      this.setState({ error });
    }
  };
  render() {
    const { email, password, error } = this.state;
    //console.log(this.props.history);
    return (
      <div>
        <div className="grid">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email</label>
              <input
                placeholder="Enter Your Email"
                type="text"
                className="text-input"
                required
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                placeholder="Enter Your Password"
                type="password"
                className="text-input"
                required
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="submit"
                className="button button-sign"
                value="Sign In"
              />
              <button onClick={signInWithGoogle} className="button button-sign">
                Sign In With Google
              </button>
              {error && <p>{error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
