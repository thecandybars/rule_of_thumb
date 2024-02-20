import { getAllPeople } from "src/services";
import HorizontalCardViewer from "./CardViewers/HorizontalCardViewer";
import TwoDimensionalCardViewer from "./CardViewers/TwoDimensionalCardViewer";
import Title from "./components/Title";
import IsMobile from "src/common/CustomHooks/IsMobile";
import useFetch from "src/common/CustomHooks/useFetch";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Voting() {
  const [fetchedPeople, reloadPeople, loadingPeople, errorPeople] = useFetch(
    () => getAllPeople()
  );
  const isMobile = IsMobile();

  const renderCardViewer = isMobile ? (
    <HorizontalCardViewer
      data={fetchedPeople?.data.length && fetchedPeople.data}
      reload={reloadPeople}
    />
  ) : (
    <TwoDimensionalCardViewer
      data={fetchedPeople?.data.length && fetchedPeople.data}
      reload={reloadPeople}
    />
  );
  return (
    <Container>
      <Title />
      {renderCardViewer}
    </Container>
  );
}
