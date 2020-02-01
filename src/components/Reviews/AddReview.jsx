import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { auth, firestore } from "../../firebase";
import * as ROUTES from "../../constants/routes";

class AddReview extends Component {
  state = { title: "", content: "" };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title, content } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const review = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL
      },
      stars: 0,
      comments: 0,
      createdAt: new Date()
    };

    firestore.collection("reviews").add(review);

    this.setState({ title: "", content: "" });
    this.props.history.push(ROUTES.REVIEWS);
  };

  render() {
    const { title, content } = this.state;
    //console.log(this.props);
    return (
      <div>
        <Link to={ROUTES.REVIEWS} className="button is-info">
          <p>Reviews</p>
        </Link>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h3 className="title">New Review</h3>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            className="textarea"
            placeholder="Body"
            name="content"
            value={content}
            onChange={this.handleChange}
          ></textarea>
          <input
            className="button is-primary"
            type="submit"
            value="Create Review"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(AddReview);
