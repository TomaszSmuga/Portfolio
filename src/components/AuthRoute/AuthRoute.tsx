import React from "react";

interface IAuthRouteProps {
  error: string;
  className?: string;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({ error, className }) => {
  if (error === "") return null;
  return (
    <small className={`ui red ${className || ""}`} role="alert">
      {error}
    </small>
  );
};

export default AuthRoute;
