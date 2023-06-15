import styled from "styled-components";
import { Checkbox } from "semantic-ui-react";

export const ConsentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 77vh;
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

  @media screen and (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;
