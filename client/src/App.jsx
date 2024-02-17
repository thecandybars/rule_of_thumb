import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./App.css";
import { getAllPeople } from "../services";

function App() {
  const [fetchedPeople, setFetchedPeople] = useState({});
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
        {fetchedPeople[0].name}
      </Typography>
    </Box>
  );
}

export default App;
