import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/test"}>Test</Link>
        </li>
      </ul>
    </nav>
  );
};
