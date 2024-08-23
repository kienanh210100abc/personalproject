"use client";

import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "@/app/component/header";
import Menu from "@/app/component/menu";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* <Header /> */}
      <Header />
      <Box component="nav" sx={{ width: "240px", flexShrink: 0 }}>
        <Menu />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - 300px)`,
        }}
      >
        <Toolbar />
        <Outlet />
        HOME PAGE
      </Box>
    </Box>
  );
};

export default HomePage;
