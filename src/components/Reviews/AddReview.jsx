import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { auth, firestore, storage } from "../../firebase";
import * as ROUTES from "../../constants/routes";
import Star from "../rater/eve/Star";

class AddReview extends Component {
  state = { title: "", content: "", totalStars: 5, ratingSelected: 0 };
  reviewInput = null;

  get file() {
    return this.reviewInput && this.reviewInput.files[0];
  }

  // componentDidMount() {
  //   const id = "5PSyOW01xQRe9CorpWJj";
  //   console.log(firestore.doc(`/reviews/${id}`));
  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  starChange(ratingSelected) {
    console.log("Test");
    this.setState({ ratingSelected: ratingSelected });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { title, content, ratingSelected } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};
    let reviewPhotoURL = "";

    //console.log(this.file);

    const review = {
      title,
      content,
      ratingSelected,
      user: {
        uid,
        displayName,
        email,
        photoURL
      },
      stars: 0,
      comments: 0,
      createdAt: new Date(),
      reviewPhotoURL
    };

    const reviewId = await firestore
      .collection("reviews")
      .add(review)
      .then(response => {
        return response.id;
      });

    const reviewRef = firestore.doc(`/reviews/${reviewId}`);

    if (this.file) {
      await storage
        .ref()
        .child("review-profiles")
        .child(reviewId)
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(reviewPhotoURL => reviewRef.update({ reviewPhotoURL }));
    }

    this.setState({ title: "", content: "" });
    this.props.history.push(ROUTES.REVIEWS);
  };

  render() {
    const { title, content, totalStars, ratingSelected } = this.state;
    //console.log(this.props);
    return (
      <div>
        <Link to={ROUTES.REVIEWS} className="button is-info">
          <p>Reviews</p>
        </Link>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h3>New Review</h3>
          <input
            className="text-input"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            className="textarea"
            placeholder="Remember, be honest!"
            name="content"
            value={content}
            onChange={this.handleChange}
          ></textarea>
          <input type="file" ref={ref => (this.reviewInput = ref)} />
          <div className="star-rating">
            <p>
              <strong>Select Rating:</strong>{" "}
            </p>
            {[...Array(totalStars)].map((n, i) => (
              <Star
                key={i}
                selected={i < ratingSelected}
                onClick={() => this.starChange(i + 1)}
              />
            ))}
          </div>
          <br />
          <input className="button" type="submit" value="Create Review" />
        </form>
      </div>
    );
  }
}

export default withRouter(AddReview);
