import React from "react";
import ThumbsDownIcon from "../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../assets/img/thumbs-up.svg";
import styled from "styled-components";
import "../../../../css/main.css";

const StyledDiv = styled.div`
  /* width: 30px;
  height: 30px; */
  background-color: ${(props) =>
    props.isPositive ? "var(--color-thumb-up)" : "var(--color-thumb-down)"};
  padding: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;
export default function ThumbIcon(props) {
  console.log("🚀 ~ ThumbIcon ~ props:", props);
  const divImageSrc = props.isPositive ? ThumbsUpIcon : ThumbsDownIcon;
  return (
    <StyledDiv isPositive={props.isPositive}>
      <img alt={`Vote ${props.type}`} src={divImageSrc} />
    </StyledDiv>
  );
}
