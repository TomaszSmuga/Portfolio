import styled from "styled-components";

export const TaskImg = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0); /* Adjust the opacity as needed */
  z-index: 1;

  div {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
