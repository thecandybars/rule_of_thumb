import { getAllPeople } from "../../../services";
import IsMobile from "../../common/customHooks/IsMobile";
import HorizontalCardViewer from "./CardViewers/HorizontalCardViewer";
import TwoDimensionalCardViewer from "./CardViewers/TwoDimensionalCardViewer";
import Title from "./components/Title";
import useFetch from "../../common/customHooks/useFetch";
import Column from "../_layoutComponents/Column";

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
