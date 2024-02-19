import React from "react";
import styled, { css } from "styled-components";
import { camelCaseToCSS } from "../../common/strings";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
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
export default function Column({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
