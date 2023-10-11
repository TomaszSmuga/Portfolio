import { Link } from "react-router-dom";
import { StyledMenu, StyledLink } from "./Menu.styled";

export const Menu = () => {
  return (
    <>
      <StyledMenu>
        <ul>
          <li>
            <StyledLink to={"/"}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={"/test"}>Test</StyledLink>
          </li>
          <li>
            <StyledLink to={"/about"}>About</StyledLink>
          </li>
          <li>
            <StyledLink to={"/register"}>Register</StyledLink>
          </li>
          <li>
            <StyledLink to={"/login"}>Login</StyledLink>
          </li>
        </ul>
      </StyledMenu>
    </>
  );
};
