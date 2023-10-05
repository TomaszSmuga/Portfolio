import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="/about/1">About 1</Link>
      <Link to="/about/2">About 2</Link>
    </>
  );
};
