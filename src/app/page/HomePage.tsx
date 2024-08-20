import React from "react";
import Menu from "../component/Menu";
import Header from "../component/Header";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box
        component="nav"
        sx={{ width: "242px", flexShrink: 0, backgroundColor: "red" }}
      >
        <Menu />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - 200px)`,
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
