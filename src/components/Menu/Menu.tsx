import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/test"}>Test</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
