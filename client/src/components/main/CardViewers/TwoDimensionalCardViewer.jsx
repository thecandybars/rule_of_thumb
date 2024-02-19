import { useState } from "react";
import Card from "../Card/Card";
import SelectViewType from "./components/SelectViewType";
import Column from "../../_layoutComponents/Column";

TwoDimensionalCardViewer.defaultProps = {
  type: "list",
};
export default function TwoDimensionalCardViewer(props) {
  const [viewerType, setViewerType] = useState("grid");

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: "8px",
  };
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "16px",
  };
  const renderCards = props.data?.map((person) => (
    <Card data={person} type={viewerType} reload={props.reload} />
  ));

  return (
    <Column>
      <SelectViewType
        value={viewerType}
        onChange={(type) => setViewerType(type)}
      />
      <div style={viewerType === "grid" ? { ...gridStyle } : { ...listStyle }}>
        {renderCards}
      </div>
    </Column>
  );
}
