import React, { useState } from "react";
import Column from "../../../_layoutComponents/Column";
import Row from "../../../_layoutComponents/Row";
import ThumbButton from "./ThumbButton";
import VoteButton from "./VoteButton";
import styled from "styled-components";
import "../../../../../css/main.css";
import { timeAgo } from "../../../../common/dates";
import { capitalize } from "../../../../common/strings";
import { votePerson } from "../../../../../services";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";

const Eyebrow = styled.p`
  /* width: 279px; */
  /* height: 17px; */
  color: var(--color-white);
  text-align: right;

  font-size: 12px;
  font-weight: 700;
  line-height: 14.4px;
`;

export default function CardActions(props) {
  const [thumbButtonSelected, setThumbButtonSelected] = useState(null);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const handleVote = (voteType) => {
    setThumbButtonSelected((prev) => (prev === voteType ? null : voteType));
  };
  const submitVote = async () => {
    if (thumbButtonSelected && !voteSubmitted) {
      const response = await votePerson({
        id: props.data.id,
        vote: thumbButtonSelected === "up",
      });
      if (response.success) {
        props.reload();
        setVoteSubmitted(true);
      }
    } else {
      setVoteSubmitted(false);
      setThumbButtonSelected(null);
    }
  };
  return (
    <Column
      styleProps={
        props.type === "grid"
          ? { gap: "8px" }
          : {
              width: "50%",
              justifyContent: "center",
              gap: "8px",
            }
      }
    >
      <Eyebrow>
        {voteSubmitted
          ? "Thank you for your vote!"
          : `${timeAgo(props.data.lastUpdated)} in ${capitalize(
              props.data.category
            )}`}
      </Eyebrow>
      <Row
        styleProps={{
          justifyContent: "end",
          gap: "8px",
          height: "38px",
        }}
      >
        {!voteSubmitted && (
          <ThumbButton
            type="up"
            onClick={() => handleVote("up")}
            isSelected={thumbButtonSelected === "up"}
          >
            <img alt="" src={ThumbsUpIcon} />
          </ThumbButton>
        )}
        {!voteSubmitted && (
          <ThumbButton
            type="down"
            onClick={() => handleVote("down")}
            isSelected={thumbButtonSelected === "down"}
          >
            <img alt="" src={ThumbsDownIcon} />
          </ThumbButton>
        )}
        <VoteButton
          onClick={submitVote}
          voteSubmitted={voteSubmitted}
          disabled={thumbButtonSelected === null}
        />
      </Row>
    </Column>
  );
}