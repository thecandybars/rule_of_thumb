import React from "react";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";
import styled from "styled-components";
import "../../../../../css/main.css";

const StyledDiv = styled(({ isPositive, ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  height: 45px;
  background-color: ${(props) =>
    props.isPositive
      ? "var(--color-thumb-up-solid)"
      : "var(--color-thumb-down-solid)"};
  img {
    width: 25px;
    height: 25px;
  }
`;

export default function ThumbIcon({ isPositive }) {
  const imageSrc = isPositive ? ThumbsUpIcon : ThumbsDownIcon;
  return (
    <StyledDiv isPositive={isPositive}>
      <img
        alt={`Average sentiment is ${isPositive ? "positive" : "negative"}`}
        src={imageSrc}
      />
    </StyledDiv>
  );
}
