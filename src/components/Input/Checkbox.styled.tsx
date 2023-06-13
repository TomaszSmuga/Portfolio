import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 4vh;
  display: flex;
  padding: 3vh 0;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: auto;

  h4 {
    text-align: center;
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 60vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  p {
    font-size: 25px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  flex-direction: column;
  background-color: #fdfdfd;
  border-radius: 4%;
  padding: 20px;
`;

export const JustDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: inherit;

  label {
    display: flex;
    align-items: center;
  }
`;
