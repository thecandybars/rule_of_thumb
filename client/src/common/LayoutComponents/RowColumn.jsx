import styled, { css } from "styled-components";
import { camelCaseToCSS } from "../strings";

const StyledRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.type};
  width: 100%;
  ${({ style }) =>
    style &&
    css`
      ${Object.entries(style)
        .map((entry) => `${camelCaseToCSS(entry[0])}: ${entry[1]};`)
        .join("\n")}
    `}
`;
RowColumn.defaultProps = {
  type: "row",
};

// Use the style prop on component to add custom inline styling
export default function RowColumn({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
