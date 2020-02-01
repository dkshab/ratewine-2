import React, { createContext, Component } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

export const ReviewsContext = createContext();

class ReviewsProvider extends Component {
  state = { reviews: [] };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("reviews")
      .onSnapshot(snapshot => {
        const reviews = snapshot.docs.map(collectIdsAndDocs);

        this.setState({ reviews });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  render() {
    const { reviews } = this.state;
    const { children } = this.props;
    return (
      <ReviewsContext.Provider value={reviews}>
        {children}
      </ReviewsContext.Provider>
    );
  }
}

export default ReviewsProvider;
