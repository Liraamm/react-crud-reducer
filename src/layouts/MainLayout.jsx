import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
