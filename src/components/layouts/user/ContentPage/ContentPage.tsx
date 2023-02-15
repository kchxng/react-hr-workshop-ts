import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import FooterPage from "../FooterPage";
import HeaderPage from "../HeaderPage";
import theme from "../../../../styles/theme/UserTheme";
import BannerPage from "../BannerPage";
import PromotionsPage from "../../../pages/userPage/PromotionsPage";
import AppDrawer from "../appDrawer/appDrawer";
import { UIProvider } from "../../../../styles/contextUI";
import SearchBox from "../SearchBox/SearchBox";

type Props = {};

export default function ContentPage({}: Props) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          {/* Open or close Drawer*/}
          <UIProvider>
            {/* Appbar, menu and appDrawer */}
            <HeaderPage />
            <BannerPage />
            <PromotionsPage />
            <SearchBox />
            <Box display={"flex"} justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Outlet />
            <FooterPage />
            {/* Drawer */}
            <AppDrawer />
          </UIProvider>
        </Container>
      </ThemeProvider>
    </>
  );
}
