import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

import AuthApp from "./AuthApp/AuthApp";
import NonAuthApp from "./NonAuthApp/NonAuthApp";

const Application = () => {
  const user = useContext(UserContext);

  return user ? <AuthApp /> : <NonAuthApp />;
};

export default Application;
