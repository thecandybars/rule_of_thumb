import React from "react";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";
import styled from "styled-components";
import "../../../../../css/main.css";

const StyledButton = styled(({ isSelected, ...props }) => (
  <button {...props} />
))`
  border: ${(props) =>
    props.isSelected
      ? "2px solid var(--color-white)"
      : "2px solid transparent"};
  background-color: ${(props) =>
    props.type === "down"
      ? "var(--color-thumb-down-solid)"
      : "var(--color-thumb-up-solid)"};
  cursor: pointer;
  padding: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;
export default function ThumbButton({ type, onClick, isSelected }) {
  const buttonImageSrc = type === "down" ? ThumbsDownIcon : ThumbsUpIcon;

  return (
    <StyledButton type={type} onClick={onClick} isSelected={isSelected}>
      <img alt={`Vote ${type}`} src={buttonImageSrc} />
    </StyledButton>
  );
}
