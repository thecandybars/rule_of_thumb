import Card from "../Card/Card";
import styled from "styled-components";

const StyledHorizontalCardViewer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  scrollbar-width: none;
`;
export default function HorizontalCardViewer({ data, reload }) {
  const renderCards = data?.map((person) => (
    <div style={{ margin: "0 8px" }} key={person.id}>
      <Card data={person} type="grid" reload={reload} />
    </div>
  ));
  return <StyledHorizontalCardViewer>{renderCards}</StyledHorizontalCardViewer>;
}
