import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import SignInAndSignUp from "../pages/SignInAndSignUp";
import CurrentUser from "../pages/CurrentUser";

const Account = ({ loading }) => {
  const user = useContext(UserContext);
  if (loading) return null;
  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Account;
