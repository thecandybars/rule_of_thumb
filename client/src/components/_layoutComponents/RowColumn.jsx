import React from "react";
import styled, { css } from "styled-components";
import { camelCaseToCSS } from "../../common/strings";

const StyledRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.type};
  width: 100%;
  ${({ styleProps }) =>
    styleProps &&
    css`
      ${Object.keys(styleProps)
        .map((key) => `${camelCaseToCSS(key)}: ${styleProps[key]};`)
        .join("\n")}
    `}
`;
RowColumn.defaultProps = {
  type: "row",
};
export default function RowColumn({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
