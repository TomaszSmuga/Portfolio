import styled from "styled-components";
import { Form } from "semantic-ui-react";

export const Wrapper = styled.div`
  margin-top: 4vh;
  display: flex;
  padding: 3vh 0;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 60vh;
  height: 77vh;

  h4 {
    text-align: center;
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 77vh;
  width: inherit;
  overflow-y: auto;
  cursor: grab;

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
    z-index: 5;
  }

  ::-webkit-scrollbar-thumb:active {
    cursor: grabbing;
  }

  p {
    font-size: 25px;
  }

  @media (max-width: 756px) {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome and Safari */
    }
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    height: fit-content;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  width: inherit;
  flex-direction: column;
  padding: 20px;

  h4 {
    margin-bottom: 25px;
  }
`;

export const JustDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  width: inherit;
  padding: 5px;
  background-color: #fdfdfd;
  border-radius: 10px;

  @media screen and (max-width: 765px) {
    padding: 10px auto;
    margin: 10px auto;
  }
`;

export const StyledRadio = styled(Form.Radio)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
