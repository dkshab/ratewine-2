import React from "react";

import SignIn from "../organisms/SignIn";
import SignUp from "../organisms/SignUp";

const SignInAndSignUp = () => (
  <div className="signin-signup">
    <SignIn />
    <hr />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
