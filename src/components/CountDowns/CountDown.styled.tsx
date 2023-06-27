import styled from "styled-components";

interface StyledCountProps {
  isZero: boolean;
}

export const StyledCount = styled.h1<StyledCountProps>`
  z-index: 999;
  color: ${({ isZero }) => (isZero ? "black" : "white")};
  font-size: 60px;
`;

interface CountProps {
  isZero: boolean;
}

export const Count: React.FC<CountProps> = ({ isZero }) => {
  return <StyledCount isZero={isZero} />;
};

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
