import React from "react";
import styled from "styled-components";
import "../../../../css/main.css";

const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: var(--color-darker-background);
  border: 2px solid white;
  padding: 8px 24px;
`;

export default function VoteButton() {
  return <StyledButton>Vote Now</StyledButton>;
}
