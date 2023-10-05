import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  ul {
    list-style-type: none;
    display: flex;
    margin: 2rem;
  }

  li {
    padding: 0.5rem;
    font-size: 2rem;
    font-weight: 600;
    border-bottom: 5px solid transparent;
    transition: border-bottom 200ms ease-in-out;
    color: black;
  }

  li:hover {
    border-bottom: 5px solid black;
  }
`;

export const StyledLink = styled(Link)`
  color: black;

  :hover {
    color: black;
  }
`;
