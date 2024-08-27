"use client";

import { ReactNode, useState } from "react";
import Header from "../component/header/page";
import Menu from "../component/menu/page";
import { Box, Toolbar } from "@mui/material";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box component="nav" sx={{ width: "220px", flexShrink: 0 }}>
          <Menu />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          {children}
        </Box>
      </Box>
    </Box>
  );
}
