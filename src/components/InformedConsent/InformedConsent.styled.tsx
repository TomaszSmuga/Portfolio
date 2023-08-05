import styled from "styled-components";
import { Checkbox } from "semantic-ui-react";

export const ConsentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &&& {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
  }
`;

export const ConsentDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65vh;

  p {
    font-size: 25px;
  }

  li {
    font-size: 25px;
    line-height: 2.5rem;
    padding: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: fit-content;
  }
`;

export const InstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vh;
  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;
export const InstructionDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65vh;

  p {
    font-size: 25px;
  }

  li {
    font-size: 25px;
    line-height: 2.5rem;
    padding: 2rem 0;
  }

  img {
    width: 20vh;
    height: 20vh;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: fit-content;
  }
`;
