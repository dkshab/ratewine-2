import React, { Component } from "react";

import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";
import { withRouter } from "react-router-dom";
import withUser from "../Session/withUser";
import Comments from "../Comments/Comments";
import ReviewContent from "./ReviewContent";

class ReviewPage extends Component {
  state = { review: null, comments: [] };

  get reviewId() {
    return this.props.match.params.id;
  }

  get reviewRef() {
    return firestore.doc(`reviews/${this.reviewId}`);
  }

  get commentsRef() {
    return this.reviewRef.collection("comments");
  }

  unsubscribeFromReview = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromReview = this.reviewRef.onSnapshot(snapshot => {
      const review = collectIdsAndDocs(snapshot);
      this.setState({ review });
    });

    this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ comments });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromReview();
    this.unsubscribeFromComments();
  }

  createComment = comment => {
    const { user } = this.props;
    this.commentsRef.add({
      ...comment,
      user
    });
  };

  render() {
    const { review, comments } = this.state;
    //console.log(this.props);
    return (
      <div>
        {review && <ReviewContent {...review} />}
        <Comments comments={comments} onCreate={this.createComment} />
      </div>
    );
  }
}

export default withRouter(withUser(ReviewPage));
