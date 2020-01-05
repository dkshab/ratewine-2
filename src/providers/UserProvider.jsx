import React, { createContext, Component } from "react";
import { auth, createUserProfileDocument } from "../firebase";

export const UserContext = createContext();

class UserProvider extends Component {
  state = { user: null };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);

      console.log(user);
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
      }
      if (!user) {
        localStorage.removeItem("authUser");
      }
      this.setState({ user });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}

export default UserProvider;
