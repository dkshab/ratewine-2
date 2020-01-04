import React, { Component } from "react";
import { auth } from "../firebase";

class SignIn extends Component {
  state = { email: "", password: "", error: null };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ email: "", password: "" });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="title">Sign In</h2>

        <div className="field">
          <label className="label">Email</label>
          <input
            className="input is-medium"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Password</label>
          <input
            className="input is-medium"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <input type="submit" className="button is-primary" value="Sign In" />
        <button className="button is-info">Sign In With Google</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignIn;
