import { styled, Typography, Box, List, IconButton } from "@mui/material";
import { textPopUpTop } from "../../../../../styles/animation";
// import { Box } from "@mui/system";
import { Colors, DrawerWidth } from "../../../../../styles/theme/UserTheme";

// Appbar Container
type appbarContainerProps = {
  matches: any;
};
export const AppbarContainer = styled(Box)(
  ({ matches }: appbarContainerProps) => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px",

    //
    borderBottom: `${matches ? "1px" : "2px"} solid ${Colors.danger}`,
  })
);

//Header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2em",
  fontFamily: '"imes New Roman, Times, serif"',
  color: Colors.secondary,
  "&:hover": {
    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
  // borderBottom: `1px solid ${Colors.danger}`,
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

// My List
type MyListProps = { type: string };
export const MyList = styled(List)(({ type }: MyListProps) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

// Drawer
export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
