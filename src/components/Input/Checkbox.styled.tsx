import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  background-color: #fdfdfd;
  border-radius: 4%;

  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 3vh 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vh;
  height: 200px;
  h4 {
    text-align: center;
  }
`;

export const JustDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
  }
`;
