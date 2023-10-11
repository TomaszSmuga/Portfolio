import React from "react";

interface IErrorTextProps {
  error: string;
  className?: string;
}

const ErrorText: React.FC<IErrorTextProps> = ({ error, className }) => {
  if (error === "") return null;
  return (
    <small className={`ui red ${className || ""}`} role="alert">
      {error}
    </small>
  );
};

export default ErrorText;
