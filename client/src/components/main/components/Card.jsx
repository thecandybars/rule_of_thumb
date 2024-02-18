import React from "react";
import styled from "styled-components";
import ThumbsDownIcon from "../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../assets/img/thumbs-up.svg";
import "../../../../css/main.css";
import { timeAgo } from "../../../common/dates";
import { capitalize } from "../../../common/strings";
import ThumbButton from "./ThumbButton";
import VoteButton from "./VoteButton";
import ThumbIcon from "./ThumbIcon";
import SentimentGauge from "./SentimentGauge";
import Row from "../../_layoutComponents/Row";
import Column from "../../_layoutComponents/Column";
import RowColumn from "../../_layoutComponents/RowColumn";
// import { ReactComponent as ThumbsDown } from "../../../../assets/img/thumbs-down.svg";
// import { ReactComponent as ThumbsUp } from "../../../../assets/img/thumbs-up.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.type === "grid" ? "end" : "start")};
  min-width: ${(props) => (props.type === "grid" ? "300px" : "100%")};
  min-height: ${(props) => (props.type === "grid" ? "300px" : "150px")};
  max-width: ${(props) => (props.type === "grid" ? "350px" : "100%")};
  max-height: ${(props) => (props.type === "grid" ? "350px" : "170px")};
  /* width: 100%; */
  background-image: ${(props) => `url(${props.picture})`};
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.type === "grid" ? "center" : "left"};
  background-size: ${(props) =>
    props.type === "grid" ? "cover" : "250px auto"};
  background-color: gray;
`;
const Title = styled.h3`
  color: var(--color-white);
  padding: 0;
  font-size: 30px;
  line-height: 36px;
`;
const Description = styled.div`
  /* width: 230px; */
  height: 36px;
  color: var(--color-white);
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
`;
const Eyebrow = styled.p`
  /* width: 279px; */
  /* height: 17px; */
  color: var(--color-white);
  text-align: right;

  font-size: 12px;
  font-weight: 700;
  line-height: 14.4px;
`;
Card.defaultProps = {
  data: {},
  type: "grid",
};
export default function Card(props) {
  const mediaPath = import.meta.env.VITE_MEDIA_PATH;

  return (
    <Container type={props.type} picture={`${mediaPath}${props.data.picture}`}>
      <Row styleProps={{ gap: "8px" }}>
        <ThumbIcon
          isPositive={props.data.votePositive - props.data.voteNegative > 0}
        />
        <Column
          styleProps={{
            gap: "16px",
            marginRight: "40px",
            marginLeft: props.type === "grid" ? "0px" : "250px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: props.type === "grid" ? "column" : "row",
              gap: 8,
            }}
          >
            <Column
              styleProps={{
                gap: 16,
              }}
            >
              <Title>{props.data.name}</Title>
              <Description>{props.data.description}</Description>
            </Column>
            <Column>
              <Eyebrow>
                {`${timeAgo(props.data.lastUpdated)} in ${capitalize(
                  props.data.category
                )}`}
              </Eyebrow>
              <Row
                styleProps={{
                  justifyContent: "end",
                  gap: 8,
                }}
              >
                <ThumbButton type="up">
                  <img alt="" src={ThumbsUpIcon} />
                </ThumbButton>
                <ThumbButton type="down">
                  <img alt="" src={ThumbsDownIcon} />
                </ThumbButton>
                <VoteButton />
              </Row>
            </Column>
          </div>
        </Column>
      </Row>
      <SentimentGauge
        votePositive={props.data.votePositive}
        voteNegative={props.data.voteNegative}
      />
    </Container>
  );
}
