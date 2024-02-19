import { useState } from "react";
import styled from "styled-components";
import "../../../../../css/main.css";
import { capitalize } from "../../../../common/strings";

const Container = styled.div`
  position: absolute;
  top: 120px;
  left: calc(100% - 175px);
  display: flex;
  flex-direction: column;
  width: 175px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  padding: 8px 16px;
  &:nth-child(2) {
    border-top: none;
    border-bottom: none;
  }
`;
const StyledButtonTitle = styled.span`
  flex-grow: 1;
  text-align: center;
`;
const StyledButtonArrow = styled.span`
  justify-self: end;
  flex-grow: 0;
`;

export default function SelectViewType({ onChange, value }) {
  const [displaySelect, setDisplaySelect] = useState(false);
  const handleMainButton = () => setDisplaySelect((prev) => !displaySelect);
  const handleSelect = (sel) => {
    onChange(sel);
    setDisplaySelect(false);
  };
  return (
    <Container>
      <StyledButton onClick={handleMainButton}>
        <StyledButtonTitle> {capitalize(value)}</StyledButtonTitle>
        <StyledButtonArrow> &#9662;</StyledButtonArrow>
      </StyledButton>
      {displaySelect && (
        <StyledButton onClick={() => handleSelect("list")}>List</StyledButton>
      )}
      {displaySelect && (
        <StyledButton onClick={() => handleSelect("grid")}>Grid</StyledButton>
      )}
    </Container>
  );
}
