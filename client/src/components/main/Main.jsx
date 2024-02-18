import React, { useEffect, useState } from "react";
import { getAllPeople } from "../../../services";
import Card from "./Card/Card";
import HorizontalCardViewer from "./HorizontalCardViewer/HorizontalCardViewer";

export default function Main() {
  const [fetchedPeople, setFetchedPeople] = useState(null);

  console.log("🚀 ~ App ~ fetchedPeople:", fetchedPeople);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllPeople();
      setFetchedPeople(response);
    };
    fetch();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* <Card data={fetchedPeople.length && fetchedPeople[5]} type="grid" /> */}
      <HorizontalCardViewer data={fetchedPeople?.length && fetchedPeople} />
    </div>
  );
}
