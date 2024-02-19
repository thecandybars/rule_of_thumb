import React from "react";
import styled from "styled-components";
import "../../../../../css/main.css";

const StyledButton = styled(
  ({ thumbButtonSelected, voteSubmitted, ...props }) => <button {...props} />
)`
  cursor: pointer;
  color: var(--color-white);
  background-color: ${(props) =>
    props.voteSubmitted || !props.thumbButtonSelected
      ? // props.voteSubmitted || !props.thumbButtonSelected
        "var(--color-darker-background)"
      : "#30303094"};
  border: 2px solid var(--color-white);
  padding: 8px 24px;
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export default function VoteButton(props) {
  const buttonLabel = props.voteSubmitted ? "Vote Again" : "Vote Now";

  return (
    <StyledButton
      disabled={props.thumbButtonSelected === null}
      onClick={props.onClick}
      thumbButtonSelected={props.thumbButtonSelected}
      voteSubmitted={props.voteSubmitted}
    >
      <p> {buttonLabel}</p>
    </StyledButton>
  );
}
// import React from "react";
// import styled from "styled-components";
// import "../../../../../css/main.css";

// const StyledButton = styled.button`
//   cursor: pointer;
//   color: white;
//   background-color: ${(props) =>
//     props.voteSubmitted || !props.thumbButtonSelected
//       ? "var(--color-darker-background)"
//       : "#30303094"};
//   border: 2px solid white;
//   padding: 8px 24px;
//   p {
//     font-size: 15px;
//     font-weight: 400;
//     line-height: 18px;
//   }
// `;

// export default function VoteButton(props) {
//   const buttonLabel = props.voteSubmitted ? "Vote Again" : "Vote Now";

//   return (
//     <StyledButton
//       disabled={props.thumbButtonSelected === null}
//       onClick={props.onClick}
//       thumbButtonSelected={props.thumbButtonSelected}
//       voteSubmitted={props.voteSubmitted}
//     >
//       <p> {buttonLabel}</p>
//     </StyledButton>
//   );
// }
