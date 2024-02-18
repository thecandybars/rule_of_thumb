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
// import { ReactComponent as ThumbsDown } from "../../../../assets/img/thumbs-down.svg";
// import { ReactComponent as ThumbsUp } from "../../../../assets/img/thumbs-up.svg";

const Container = styled.div`
  display: flex;
  align-items: end;
  width: 300px;
  height: 300px;
  background-image: ${(props) => `url(${props.picture})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--color-white);
  padding: 0;
  gap: 4px;
  img {
    background-color: var(--color-darker-background);
  }
  h3 {
    font-size: 30px;
    line-height: 36px;
  }
`;
const Description = styled.div`
  width: 230px;
  height: 36px;
  color: var(--color-white);
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
  }
`;
const Eyebrow = styled.div`
  /* width: 279px; */
  /* height: 17px; */
  color: var(--color-white);
  text-align: right;
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 14.4px;
  }
`;
export default function Card(props) {
  const mediaPath = import.meta.env.VITE_MEDIA_PATH;

  return (
    <Container picture={`${mediaPath}${props.data.picture}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Title>
          <ThumbIcon
            isPositive={props.data.votePositive - props.data.voteNegative > 0}
          />
          <h3>{props.data.name}</h3>
        </Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            margin: "0 40px",
          }}
        >
          <Description>
            <p>{props.data.description}</p>
          </Description>
          <Eyebrow>
            <p>
              {`${timeAgo(props.data.lastUpdated)} in ${capitalize(
                props.data.category
              )}`}
            </p>
          </Eyebrow>
          <div
            style={{
              display: "flex",
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
          </div>
        </div>
        <SentimentGauge
          votePositive={props.data.votePositive}
          voteNegative={props.data.voteNegative}
        />
      </div>
    </Container>
  );
}
