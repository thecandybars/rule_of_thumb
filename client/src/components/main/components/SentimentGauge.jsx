import React from "react";
import styled from "styled-components";
import "../../../../css/main.css";
import ThumbsDownIcon from "../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../assets/img/thumbs-up.svg";
import { roundTo } from "../../../common/numbers";

const GaugePositive = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  padding: 8px;
  gap: 8px;
  background-color: var(--color-thumb-up);
  p {
    font-size: 18px;
    color: var(--color-white);
  }
`;
const GaugeNegative = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: ${(props) => props.width};
  padding: 8px;
  gap: 8px;
  background-color: var(--color-thumb-down);
  p {
    font-size: 18px;
    color: var(--color-white);
  }
`;

export default function SentimentGauge(props) {
  const votesTotal = props.voteNegative + props.votePositive;
  const widthPositive = roundTo((props.votePositive * 100) / votesTotal, 1);
  const widthNegative = roundTo((props.voteNegative * 100) / votesTotal, 1);
  return (
    <div style={{ display: "flex", width: "100%", height: "36px" }}>
      <GaugePositive width={`${widthPositive}%`}>
        <img alt={`${widthPositive}%`} src={ThumbsUpIcon} />
        <p>{widthPositive}%</p>
      </GaugePositive>
      <GaugeNegative width={`${widthNegative}%`}>
        <img alt={`${widthNegative}%`} src={ThumbsDownIcon} />
        <p>{widthNegative}%</p>
      </GaugeNegative>
    </div>
  );
}
