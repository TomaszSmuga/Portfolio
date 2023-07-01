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
  height: auto;

  h4 {
    text-align: center;
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  width: inherit;

  p {
    font-size: 25px;
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
