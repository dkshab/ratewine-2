import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../firebase";

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

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      //this.setState(error);
      console.error(error);
    }
  };
  render() {
    const { displayName, email, password, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="title">Sign Up</h2>
        <div className="field">
          <label className="label">Display Name</label>
          <input
            className="input is-medium"
            type="text"
            name="displayName"
            placeholder="Display Name"
            required
            value={displayName}
            onChange={this.handleChange}
          />
        </div>
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
        <input className="button is-success" type="submit" value="Sign Up" />
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignUp;
