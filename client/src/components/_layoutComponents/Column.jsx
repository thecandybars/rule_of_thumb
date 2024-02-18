import React from "react";
import styled, { css } from "styled-components";
import { camelCaseToCSS } from "../../common/strings";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ styleProps }) =>
    styleProps &&
    css`
      ${Object.keys(styleProps)
        .map((key) => `${camelCaseToCSS(key)}: ${styleProps[key]};`)
        .join("\n")}
    `}
`;
export default function Column({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
