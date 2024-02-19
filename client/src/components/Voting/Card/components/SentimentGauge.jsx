import styled from "styled-components";
import "src/css/main.css";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";
import { roundTo } from "src/common/numbers";
import Row from "src/common/LayoutComponents/Row";

const Gauge = styled.div`
  display: flex;
  justify-content: ${(props) => (props.type === "positive" ? "start" : "end")};
  align-items: center;
  width: ${(props) => props.width};
  padding: 8px;
  gap: 8px;
  background-color: ${(props) =>
    props.type === "positive"
      ? "var(--color-thumb-up)"
      : "var(--color-thumb-down)"};
  p {
    font-size: 18px;
    color: var(--color-white);
  }
`;

export default function SentimentGauge({ voteNegative, votePositive }) {
  const votesTotal = voteNegative + votePositive;
  const widthPositive = roundTo((votePositive * 100) / votesTotal, 1);
  const widthNegative = roundTo((voteNegative * 100) / votesTotal, 1);

  return (
    <Row style={{ height: "36px" }}>
      <Gauge type="positive" width={`${widthPositive}%`}>
        <img alt={`${widthPositive}%`} src={ThumbsUpIcon} />
        <p>{widthPositive}%</p>
      </Gauge>
      <Gauge type="negative" width={`${widthNegative}%`}>
        <p>{widthNegative}%</p>
        <img alt={`${widthNegative}%`} src={ThumbsDownIcon} />
      </Gauge>
    </Row>
  );
}
