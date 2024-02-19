import { useEffect, useState } from "react";
import styled from "styled-components";
import "src/css/main.css";
import { capitalize } from "src/common/strings";

const Container = styled.div`
  position: absolute;
  top: -3rem;
  left: calc(100% - 175px - 16px);
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
  const handleMainButton = () => setDisplaySelect((prev) => !prev);
  const handleSelect = (sel) => {
    onChange(sel);
    localStorage.setItem("displaySelect", sel);
    setDisplaySelect(false);
  };
  useEffect(() => {
    const storedDisplaySelect = localStorage.getItem("displaySelect");
    if (storedDisplaySelect) handleSelect(storedDisplaySelect);
  }, []);

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
