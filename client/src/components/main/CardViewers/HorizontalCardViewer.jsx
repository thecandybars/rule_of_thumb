import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";

const StyledHorizontalCardViewer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  scrollbar-width: none;
`;
export default function HorizontalCardViewer(props) {
  const renderCards = props.data?.map((person) => (
    <div style={{ margin: "0 8px" }}>
      <Card data={person} type="grid" reload={props.reload} />
    </div>
  ));
  return <StyledHorizontalCardViewer>{renderCards}</StyledHorizontalCardViewer>;
}
