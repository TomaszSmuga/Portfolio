import styled from "styled-components";

export const ConsentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConsentDiv = styled.div`
  height: 80vh;
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
`;
