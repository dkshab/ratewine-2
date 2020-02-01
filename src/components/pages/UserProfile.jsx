import React, { Component } from "react";

import withAuthorization from "../Session/withAuthorization";
import { auth, firestore, storage } from "../../firebase";
import withUser from "../Session/withUser";
import * as ROUTES from "../../constants/routes";

class UserProfile extends Component {
  state = { displayName: "" };
  imageInput = null;

  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`/users/${this.uid}`);
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName } = this.state;

    if (displayName) {
      this.userRef.update({ displayName });
    }

    if (this.file) {
      await storage
        .ref()
        .child("user-profiles")
        .child(this.uid)
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => this.userRef.update({ photoURL }));
    }
    this.props.history.push(ROUTES.ACCOUNT);
  };
  render() {
    //console.log(this.props);
    const { displayName } = this.state;

    return (
      <div className="update-user">
        <h1>Update Details</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="text-input"
              type="text"
              value={displayName}
              name="displayName"
              placeholder="Enter New Display Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="input"
              type="file"
              ref={ref => (this.imageInput = ref)}
              placeholder="Profile Picture"
            />
          </div>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    );
  }
}

const condition = user => user != null;

export default withUser(withAuthorization(condition)(UserProfile));
