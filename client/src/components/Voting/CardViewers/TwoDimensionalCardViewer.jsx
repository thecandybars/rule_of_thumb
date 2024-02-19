import { useState } from "react";
import Card from "../Card/Card";
import SelectViewType from "./components/SelectViewType";
import Column from "../../_layoutComponents/Column";

TwoDimensionalCardViewer.defaultProps = {
  type: "grid",
};
export default function TwoDimensionalCardViewer({ data, reload }) {
  const [viewerType, setViewerType] = useState("grid");

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: "16px",
  };
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "16px",
  };
  const renderCards = data?.map((person) => (
    <Card key={person.id} data={person} type={viewerType} reload={reload} />
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
