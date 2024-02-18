import React from "react";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";
import styled from "styled-components";
import "../../../../../css/main.css";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  height: 45px;
  background-color: ${(props) =>
    props.isPositive ? "var(--color-thumb-up)" : "var(--color-thumb-down)"};
  img {
    width: 25px;
    height: 25px;
  }
`;
export default function ThumbIcon(props) {
  const imageSrc = props.isPositive ? ThumbsUpIcon : ThumbsDownIcon;
  return (
    <StyledDiv isPositive={props.isPositive}>
      <img
        alt={`Average sentiment is ${
          props.isPositive ? "positive" : "negative"
        }`}
        src={imageSrc}
      />
    </StyledDiv>
  );
}
