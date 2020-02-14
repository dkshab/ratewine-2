import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { firestore } from "../../firebase";
import moment from "moment";
import { Link } from "react-router-dom";

const belongsToCurrentUser = (currentUser, postAuthor) => {
  if (!currentUser) return false;

  return currentUser.uid === postAuthor.uid;
};

const ReviewContent = ({
  id,
  title,
  content,
  createdAt,
  user,
  stars,
  comments,
  reviewPhotoURL,
  ratingSelected
}) => {
  const currentUser = useContext(UserContext);

  const reviewRef = firestore.doc(`reviews/${id}`);
  const remove = () => {
    reviewRef.delete();
  };
  const star = () => reviewRef.update({ stars: stars + 1 });

  return (
    // <article className="ReviewContent">
    //   <div className="ReviewContent__inner">
    //     <h3>{title}</h3>
    //     <div className="image">
    //       <img src={reviewPhotoURL} alt="Review" />
    //     </div>
    //     <p>{content}</p>
    //     <div className="ReviewContent--meta">
    //       <div>
    //         <p>
    //           <span role="img" aria-label="star">
    //             ⭐️
    //           </span>
    //           {stars}
    //         </p>
    //         <p>
    //           <span role="img" aria-label="comments">
    //             🙊
    //           </span>
    //           {comments}
    //         </p>
    //         <p>Posted by {user.displayName}</p>
    //         <p>{moment(createdAt.toDate()).calendar()}</p>
    //       </div>
    //       <div>
    //         <button className="button button-star" onClick={star}>
    //           Star
    //         </button>
    //         {belongsToCurrentUser(currentUser, user) && (
    //           <button className="button button-delete" onClick={remove}>
    //             Delete
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </article>
    <div className="ReviewContent">
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
        <p className="content">{content}</p>
        <div className="ReviewContent--meta-bottom">
          <div>
            <p>
              <span role="img" aria-label="star">
                ⭐️
              </span>
              {stars}
            </p>
            <p>
              <span role="img" aria-label="comments">
                🙊
              </span>
              {comments}
            </p>
          </div>
          <div>
            <button className="button button-star" onClick={star}>
              Star
            </button>
            {belongsToCurrentUser(currentUser, user) && (
              <button className="button button-delete" onClick={remove}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewContent.defaultProps = {
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

export default ReviewContent;
