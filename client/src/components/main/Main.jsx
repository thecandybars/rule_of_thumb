import { getAllPeople } from "../../../services";
import IsMobile from "../../common/customHooks/IsMobile";
import HorizontalCardViewer from "./CardViewers/HorizontalCardViewer";
import TwoDimensionalCardViewer from "./CardViewers/TwoDimensionalCardViewer";
import Title from "./components/Title";
import useFetch from "../../common/customHooks/useFetch";
import styled from "styled-components";
import { DESKTOP, TABLET } from "../../common/constants";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Main() {
  const [fetchedPeople, errorPeople, loadingPeople, reloadPeople] = useFetch(
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
    <MainContainer>
      <Title />
      {renderCardViewer}
    </MainContainer>
  );
}
