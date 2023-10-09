import React from "react";

interface IErrorTextProps {
  error: string;
}

const ErrorText: React.FC<IErrorTextProps> = ({ error }) => {
  return <small className="ui red">{error}</small>;
};

export default ErrorText;
