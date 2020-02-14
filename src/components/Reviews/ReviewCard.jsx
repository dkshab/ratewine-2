import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Star from "../rater/eve/Star";

class ReviewCard extends Component {
  state = { totalStars: 5 };
  render() {
    //console.log(this.props);
    const {
      id,
      title,
      createdAt,
      ratingSelected,
      reviewPhotoURL,
      content,
      user
    } = this.props;
    const { totalStars } = this.state;
    return (
      // <div className="review-container">
      //   <div className="image">
      //     <img src={reviewPhotoURL} alt={reviewPhotoURL} />
      //   </div>
      //   <div className="review-container-content">
      //     <h2 className="title-link">{title}</h2>
      //     <p className="date">{moment(createdAt.toDate()).calendar()}</p>
      //     <Link to={`/reviews/${id}`}>Read Review</Link>
      //     <p>{content}</p>
      //   </div>
      // </div>
      <div className="review-container">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${reviewPhotoURL})` }}
          ></div>
          <ul className="details">
            <li className="author">{user.displayName}</li>
            <li className="date">{moment(createdAt.toDate()).calendar()}</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="/">Red</a>
                </li>
                <li>
                  <a href="/">Cab</a>
                </li>
                <li>
                  <a href="/">Bold</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <h2>Rating: {ratingSelected}</h2>
          <p>{content}</p>
          <p className="read-more">
            <Link to={`/reviews/${id}`}>Read Review</Link>
          </p>
        </div>
      </div>
    );
  }
}

ReviewCard.defaultProps = {
  title: "An Incredibly Hot Take",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.",
  user: {
    id: "123",
    displayName: "Bill Murray",
    email: "billmurray@mailinator.com",
    photoURL: "https://www.fillmurray.com/300/300"
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0
};

export default ReviewCard;
