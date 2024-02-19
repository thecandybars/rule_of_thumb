import styled from "styled-components";
import "src/css/main.css";

const StyledTitle = styled.h3`
  color: var(--color-dark-gray);
  font-weight: 300;
  font-size: 24px;
  margin: 0 10px;
  /* Tablet */
  @media (min-width: 768px) {
    margin: 0 12px;
  }
  /* Desktop */
  @media (min-width: 1100px) {
    margin: 0 0px;
    font-size: 45px;
  }
`;

export default function Title() {
  return <StyledTitle>Previous Rulings</StyledTitle>;
}
