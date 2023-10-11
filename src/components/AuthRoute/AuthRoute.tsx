import React from "react";
import { auth } from "../../Utilities/Firebase/firebase";
import { Navigate } from "react-router-dom";

const AuthRoute: React.FC = () => {
  if (!auth.currentUser) {
    return <Navigate to="/login" />; // Replace with your desired path
  }

  return <div>{children}</div>;
};

export default AuthRoute;
