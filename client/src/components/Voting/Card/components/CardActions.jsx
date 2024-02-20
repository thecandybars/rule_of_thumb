import { useState } from "react";
import ThumbButton from "./ThumbButton";
import VoteButton from "./VoteButton";
import styled from "styled-components";
import "src/css/main.css";
import { timeAgo } from "src/common/dates";
import { capitalize } from "src/common/strings";
import { votePerson } from "../../../../services";
import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-self: ${(props) => (props.type === "grid" ? "end" : "unset")};
  min-width: ${(props) => (props.type === "grid" ? "unset" : "230px")};
  margin-top: ${(props) => (props.type === "grid" ? "end" : "8px")};
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
const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  height: 38px;
`;

export default function CardActions({ type, data, reload }) {
  const [thumbButtonSelected, setThumbButtonSelected] = useState(null);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const handleVote = (voteType) => {
    setThumbButtonSelected((prev) => (prev === voteType ? null : voteType));
  };
  const submitVote = async () => {
    if (thumbButtonSelected && !voteSubmitted) {
      const response = await votePerson({
        id: data.id,
        vote: thumbButtonSelected === "up",
      });
      if (response.success) {
        reload();
        setVoteSubmitted(true);
      }
    } else {
      setVoteSubmitted(false);
      setThumbButtonSelected(null);
    }
  };
  return (
    <Container type={type}>
      <Eyebrow>
        {voteSubmitted
          ? "Thank you for your vote!"
          : `${timeAgo(data.lastUpdated)} in ${capitalize(data.category)}`}
      </Eyebrow>
      <ButtonGroup>
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
          thumbButtonSelected={thumbButtonSelected}
        />
      </ButtonGroup>
    </Container>
  );
}
