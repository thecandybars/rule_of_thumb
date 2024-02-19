import React from "react";
import styled from "styled-components";
import "../../../../../css/main.css";

const StyledButton = styled(
  ({ thumbButtonSelected, voteSubmitted, ...props }) => <button {...props} />
)`
  cursor: pointer;
  color: var(--color-white);
  background-color: ${(props) =>
    props.voteSubmitted || !props.thumbButtonSelected
      ? "var(--color-darker-background)"
      : "var(--color-vote-active)"};
  border: 2px solid var(--color-white);
  padding: 8px 24px;
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export default function VoteButton({
  voteSubmitted,
  thumbButtonSelected,
  onClick,
}) {
  const buttonLabel = voteSubmitted ? "Vote Again" : "Vote Now";

  return (
    <StyledButton
      disabled={thumbButtonSelected === null}
      onClick={onClick}
      thumbButtonSelected={thumbButtonSelected}
      voteSubmitted={voteSubmitted}
    >
      <p> {buttonLabel}</p>
    </StyledButton>
  );
}
