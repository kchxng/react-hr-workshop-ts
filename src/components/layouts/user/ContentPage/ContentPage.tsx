import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import theme from "../../../../styles/theme";

type Props = {};

export default function ContentPage({}: Props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          {/* Appbar, menu and appDrawer */}
          <HeaderPage />
          <Outlet />
          <FooterPage />
        </Container>
      </ThemeProvider>
    </>
  );
}
