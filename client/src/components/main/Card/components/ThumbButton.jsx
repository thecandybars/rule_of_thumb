import React from "react";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";
import styled from "styled-components";
import "../../../../../css/main.css";

const StyledButton = styled.button`
  border: ${(props) =>
    props.isSelected
      ? "2px solid var(--color-white)"
      : "2px solid transparent"};
  background-color: ${(props) =>
    props.type === "down"
      ? "var(--color-thumb-down)"
      : "var(--color-thumb-up)"};
  cursor: pointer;
  padding: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;
export default function ThumbButton(props) {
  const buttonImageSrc = props.type === "down" ? ThumbsDownIcon : ThumbsUpIcon;

  return (
    <StyledButton
      type={props.type}
      onClick={props.onClick}
      isSelected={props.isSelected}
    >
      <img alt={`Vote ${props.type}`} src={buttonImageSrc} />
    </StyledButton>
  );
}
