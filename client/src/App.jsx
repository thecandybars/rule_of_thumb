import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./App.css";
import { getAllPeople } from "../services";

function App() {
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
  return (
    <Box>
      <Typography variant="subtitle1" color="primary">
        {fetchedPeople?.length && fetchedPeople[0].name}
      </Typography>
      <img
        alt="hola"
        src={`${mediaPath}${fetchedPeople?.length && fetchedPeople[0].picture}`}
      />
    </Box>
  );
}

export default App;
