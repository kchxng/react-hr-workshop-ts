import { styled, Typography, Box, List } from "@mui/material";
// import { Box } from "@mui/system";
import { Colors } from "../../../../../styles/theme";

// Appbar Container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

//Header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "14px",
  fontFamily: '"Montez","cursive"',
  color: Colors.secondary,
}));

// My List
type MyListProps = { type: string };
export const MyList = styled(List)(({ type }: MyListProps) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

// ActionIconContainerDesktop
export const ActionIconContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

// ActionIconContainerMobile
export const ActionIconContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));
