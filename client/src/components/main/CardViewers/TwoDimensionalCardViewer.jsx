import { useState } from "react";
import Card from "../Card/Card";
import SelectViewType from "./components/SelectViewType";

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
    // justifyContent: "center",
    // alignItems: "center",
    // flexWrap: "wrap",
    width: "100%",
    gap: "8px",
  };
  const renderCards = props.data?.map((person) => (
    <Card data={person} type={viewerType} reload={props.reload} />
  ));

  console.log("🚀 ~ TwoDimensionalCardViewer ~ viewerType:", viewerType);
  return (
    <div style={{ width: "100%" }}>
      <SelectViewType
        value={viewerType}
        onChange={(type) => setViewerType(type)}
      />
      <div style={viewerType === "grid" ? { ...gridStyle } : { ...listStyle }}>
        {renderCards}
      </div>
    </div>
  );
}
