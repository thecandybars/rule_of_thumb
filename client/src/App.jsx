import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./App.css";
import { getAllPeople } from "../services";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import AsideTop from "./components/asides/AsideTop";
import AsideBottom from "./components/asides/AsideBottom";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <div class="max-centered">
        <AsideTop />
        <Main />
        <AsideBottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
