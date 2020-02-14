import React, { Component } from "react";

import "./rating-page.css";
//import StarRating from "./star-rating";
import { auth, firestore } from "../../firebase";
import StarRating from "./eve/eve-rating";

class RatingPage extends Component {
  state = {
    name: "",
    description: "",
    rating: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, description, rating } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const myRating = {
      name,
      description,
      rating,
      user: {
        uid,
        displayName,
        email,
        photoURL
      }
    };

    firestore.collection("ratings").add(myRating);

    console.log("Test");
  };

  setRating = rating => {
    this.setRating({ rating: rating });
  };

  render() {
    return (
      <div className="rating-form">
        <div className="heading">Rate A Beer</div>
        <div className="form-input">
          <label htmlFor="name">Beer:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-input rating">
          <label htmlFor="rating">Rating:</label>
          <StarRating totalStars={5} />
        </div>

        <div className="actions">
          <button className="button" type="submit" onClick={this.handleSubmit}>
            Submit Rating
          </button>
        </div>
      </div>
    );
  }
}

export default RatingPage;
