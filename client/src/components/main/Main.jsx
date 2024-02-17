import React, { useEffect, useState } from "react";
import { getAllPeople } from "../../../services";

export default function Main() {
  const [fetchedPeople, setFetchedPeople] = useState(null);
  const mediaPath = import.meta.env.VITE_MEDIA_PATH;

  console.log("🚀 ~ App ~ fetchedPeople:", fetchedPeople);
  useEffect(() => {
    const fetch = async () => {
      const response = await getAllPeople();
      setFetchedPeople(response);
    };
    fetch();
  }, []);
  return <div>Main</div>;
}
