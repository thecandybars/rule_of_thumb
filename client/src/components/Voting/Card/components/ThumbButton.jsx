import ThumbsDownIcon from "../../../../../assets/img/thumbs-down.svg";
import ThumbsUpIcon from "../../../../../assets/img/thumbs-up.svg";
import styled from "styled-components";
import "src/css/main.css";

const StyledButton = styled(({ isSelected, ...props }) => (
  <button {...props} />
))`
  border: ${(props) =>
    props.isSelected
      ? "2px solid var(--color-white)"
      : "2px solid transparent"};
  background-color: ${(props) =>
    props.type === "down"
      ? "rgba(var(--color-yellow-negative), 0.8)"
      : "rgba(var(--color-green-positive), 0.8)"};
  &:hover {
    background-color: ${(props) =>
      props.type === "down"
        ? "rgba(var(--color-yellow-negative), 1)"
        : "rgba(var(--color-green-positive), 1)"};
  }
  cursor: pointer;
  padding: 8px;
  img {
    width: 16px;
    height: 16px;
  }
`;
export default function ThumbButton({ type, onClick, isSelected }) {
  const buttonImageSrc = type === "down" ? ThumbsDownIcon : ThumbsUpIcon;

  return (
    <StyledButton type={type} onClick={onClick} isSelected={isSelected}>
      <img alt={`Vote ${type}`} src={buttonImageSrc} />
    </StyledButton>
  );
}
