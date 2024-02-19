import styled, { css } from "styled-components";
import { camelCaseToCSS } from "src/common/strings";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${({ style }) =>
    style &&
    css`
      ${Object.entries(style)
        .map((entry) => `${camelCaseToCSS(entry[0])}: ${entry[1]};`)
        .join("\n")}
    `}
`;
// Use the style prop on component to add custom inline styling

export default function Row({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
