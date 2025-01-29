import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Appbar";
import theme from "../Configuration/theme";

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <div style={{ padding: "16px" }}>
          <Outlet />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
