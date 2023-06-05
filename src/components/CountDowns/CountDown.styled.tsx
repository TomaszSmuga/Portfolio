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
