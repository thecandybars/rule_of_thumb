import { getAllPeople } from "src/services";
import HorizontalCardViewer from "./CardViewers/HorizontalCardViewer";
import TwoDimensionalCardViewer from "./CardViewers/TwoDimensionalCardViewer";
import Title from "./components/Title";
import IsMobile from "src/common/CustomHooks/IsMobile";
import useFetch from "src/common/CustomHooks/useFetch";
import Column from "src/common/LayoutComponents/Column";

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
    <Column style={{ gap: "16px" }}>
      <Title />
      {renderCardViewer}
    </Column>
  );
}
