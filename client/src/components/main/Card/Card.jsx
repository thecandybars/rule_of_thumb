import React from "react";
import styled from "styled-components";
import ThumbsDownIcon from "../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../assets/img/thumbs-up.svg";
import "../../../../css/main.css";
import { timeAgo } from "../../../common/dates";
import { capitalize } from "../../../common/strings";
import ThumbButton from "./components/ThumbButton";
import VoteButton from "./components/VoteButton";
import ThumbIcon from "./components/ThumbIcon";
import SentimentGauge from "./components/SentimentGauge";
import Row from "../../_layoutComponents/Row";
import Column from "../../_layoutComponents/Column";
import RowColumn from "../../_layoutComponents/RowColumn";
import { votePerson } from "../../../../services";
// import { ReactComponent as ThumbsDown } from "../../../../assets/img/thumbs-down.svg";
// import { ReactComponent as ThumbsUp } from "../../../../assets/img/thumbs-up.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.type === "grid" ? "end" : "space-between"};
  min-width: ${(props) => (props.type === "grid" ? "300px" : "100%")};
  min-height: ${(props) => (props.type === "grid" ? "300px" : "150px")};
  max-width: ${(props) => (props.type === "grid" ? "350px" : "100%")};
  max-height: ${(props) => (props.type === "grid" ? "350px" : "170px")};
  background-image: ${(props) => `url(${props.picture}),`}
    linear-gradient(
      to right,
      var(--color-dark-background),
      var(--color-darker-background) 50%,
      var(--color-dark-background)
    );
  /* background-blend-mode: overlay; */
  background-repeat: no-repeat;
  background-position: ${(props) =>
    props.type === "grid" ? "center" : "left"};
  background-size: ${(props) =>
    props.type === "grid" ? "cover" : "250px auto,100%"};
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

  const handleVote = async (type) => {
    const response = await votePerson({
      id: props.data.id,
      vote: type === "up",
    });
    if (response.success) props.reload();
  };

  return (
    <Container type={props.type} picture={`${mediaPath}${props.data.picture}`}>
      <Row styleProps={{ gap: "8px", justifyContent: "space-between" }}>
        <ThumbIcon
          isPositive={props.data.votePositive - props.data.voteNegative > 0}
        />

        <div
          style={{
            display: "flex",
            flexDirection: props.type === "grid" ? "column" : "row",
            margin:
              props.type === "grid" ? "8px 32px 8px 0px" : "8px 8px 8px 250px",
            // marginRight: props.type === "grid" ? "40px" : "unset",
            // marginLeft: props.type === "grid" ? "unset" : "250px",
            gap: 8,
          }}
        >
          <Column
            styleProps={{
              gap: "16px",
            }}
          >
            <Title>{props.data.name}</Title>
            <Description>{props.data.description}</Description>
          </Column>
          <Column
            styleProps={
              props.type === "grid"
                ? { gap: "8px" }
                : { width: "50%", justifyContent: "center", gap: "8px" }
            }
          >
            <Eyebrow>
              {`${timeAgo(props.data.lastUpdated)} in ${capitalize(
                props.data.category
              )}`}
            </Eyebrow>
            <Row
              styleProps={{
                justifyContent: "end",
                gap: "8px",
              }}
            >
              <ThumbButton type="up" onClick={() => handleVote("up")}>
                <img alt="" src={ThumbsUpIcon} />
              </ThumbButton>
              <ThumbButton type="down" onClick={() => handleVote("down")}>
                <img
                  alt=""
                  src={ThumbsDownIcon}
                  onClick={() => handleVote("down")}
                />
              </ThumbButton>
              <VoteButton />
            </Row>
          </Column>
        </div>
      </Row>
      <SentimentGauge
        votePositive={props.data.votePositive}
        voteNegative={props.data.voteNegative}
      />
    </Container>
  );
}
