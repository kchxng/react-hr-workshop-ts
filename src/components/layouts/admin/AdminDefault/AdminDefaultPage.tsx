import { Box, styled, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import BitcionPiePage from "../../../pages/adminPage/bitcionPiePage/bitcionPiePage";
import BitcionPurchangePage from "../../../pages/adminPage/bitcionPurchagePage/bitcionPurchangePage";
import BitcoinStockPage from "../../../pages/adminPage/bitcoinStockPage/BitcoinStockPage";
import BitcoinTransferPage from "../../../pages/adminPage/bitcoinTransferPage/bitcoinTransferPage";
import ExchangeRateTickerPage from "../../../pages/adminPage/exchangeRateTickerPage/exchangeRateTickerPage";
import PriceChangeTablePage from "../../../pages/adminPage/PriceChangeTablePage/PriceChangeTablePage";
import AdminAppCard from "../AdminAppCardPage/AdminAppCardPage";
import {
  DrawerHeader,
  drawerWidth,
  HeaderTitle,
} from "../AdminAppDrawer/AdminAppDrawer";

// To open drawer
const openedMixin = (theme: any) => ({
  marginLeft: drawerWidth,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// to close drawer
const closedMixin = (theme: any) => ({
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  marginLeft: `calc(${theme.spacing(7)} +1px)`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: `calc(${theme.spacing(8)} + 1px)`,
  },
});

type MainCntProps = {
  theme: any;
  open: any;
};
const MainContainer = styled(Box)(({ theme, open }: MainCntProps) => ({
  marginLeft: drawerWidth,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "&. MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "&. MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {};

export default function AdminDefaultPage({}: Props) {
  const { state } = useAppState();

  const bicoinData = [50, 30, 25, 130, 90, 60, 70, 92, 20, 140, 80, 90];
  const etheriumData = [60, 30, 60, 130, 190, 160, 40, 10, 120, 160, 60, 30];
  const rippleData = [20, 10, 50, 110, 60, 140, 70, 92, 20, 140, 100, 160];
  const blackcoinData = [80, 130, 25, 130, 190, 60, 10, 92, 80, 140, 180, 60];
  return (
    <>
      <MainContainer component="main" theme={undefined} open={state.drawer}>
        <DrawerHeader />
        <Box>
          {/* <Box
            sx={{
              background: `url(${process.env.PUBLIC_URL}/images/bg.jpg)`,
              boxShadow: "inset 0 0 50px 50px rgba(0, 0, 0, 0.8)",
              padding: "20px 30px 99px 30px",
              backgroundPosition: "right 0px bottom 800px",
              color: "#fff",
            }}
          > */}
          {/* <HeaderTitle>Welcome to Crypto Dashboard</HeaderTitle> */}
          {/* <Typography
              sx={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: "1.6rem",
                lineHeight: 1.5,
                letterSpacing: 0.005,
              }}
            >
              Welcome Stock Exchange Dashboard
            </Typography>
          </Box> */}
          {/* <HeaderTitle>Welcome to Stock Exchange Dashboard</HeaderTitle> */}

          {/* Show tab exchange rate */}
          <ExchangeRateTickerPage />
          <Grid2
            container
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ p: 1 }}
          >
            {/* Bicoin Card */}
            <Grid2 xs={12} md={3}>
              <AdminAppCard
                avatar={`bitcoin.png`}
                title="Bitcoin"
                subheader="$78.99"
                trend={-0.005}
                trendDirection="up"
                data={bicoinData}
                bg={`${ColorsAdmin.bitcoin}`}
              />
            </Grid2>
            {/* Etherium Card */}
            <Grid2 xs={12} md={3}>
              <AdminAppCard
                avatar={`ethereum.png`}
                title="Ethereum"
                subheader="$44.99"
                trend={-0.005}
                trendDirection="down"
                data={etheriumData}
                bg={`${ColorsAdmin.ethereum}`}
              />
            </Grid2>
            {/* Ripple Card */}
            <Grid2 xs={12} md={3}>
              <AdminAppCard
                avatar={`ripple.png`}
                title="Ripple"
                subheader="$88.99"
                trend={+0.005}
                trendDirection="up"
                data={rippleData}
                bg={`${ColorsAdmin.ripple}`}
              />
            </Grid2>
            {/* Blackcoin Card */}
            <Grid2 xs={12} md={3}>
              <AdminAppCard
                avatar={`blackcoin.png`}
                title="Blackcoin"
                subheader="$58.99"
                trend={-0.005}
                trendDirection="up"
                data={blackcoinData}
                bg={`${ColorsAdmin.blackcoin}`}
              />
            </Grid2>
          </Grid2>
          {/* Stock Chart and Pie */}
          <Grid2
            container
            justifyContent="space-evenly"
            alignItems="center"
            columnSpacing={2}
            sx={{ p: 1, maxWidth: "100%" }}
          >
            <Grid2 xs={12} md={8}>
              <BitcoinStockPage />
            </Grid2>
            <Grid2 xs={12} md={4}>
              <BitcionPiePage />
            </Grid2>
          </Grid2>
          {/* Price Change Table and Bitcoin*/}
          <Grid2
            container
            justifyContent={"space-evenly"}
            columnSpacing={2}
            alignItems="center"
            sx={{ p: 1, maxWidth: "100%" }}
          >
            <Grid2 xs={12} md={8}>
              <PriceChangeTablePage />
            </Grid2>
            <Grid2 xs={12} md={4}>
              <Box display={"flex"} flexDirection="column">
                <BitcionPurchangePage />
                <BitcoinTransferPage />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </MainContainer>
    </>
  );
}
