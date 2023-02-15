import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminAppState from "../../../../styles/contextUI/AdminAppState";
import appTheme, { palette } from "../../../../styles/theme/AdminTheme";
import AdminAppbar from "../AdminAppbar/AdminAppbar";
import AdminAppDrawer from "../AdminAppDrawer/AdminAppDrawer";
import AdminFooter from "../AdminFooter/AdminFooter";

type Props = {};

export default function AdminContentPage({}: Props) {
  const [switchMode, setSwitchMode] = useState<string>("light");
  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setSwitchMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: { ...palette, mode: switchMode },
    ...appTheme,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* controll all by AdminAppState */}
        <AdminAppState>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* line for below components */}
            <CssBaseline />
            <AdminAppbar switchColorMode={colorMode.toggleMode} />
            <AdminAppDrawer />
            <Outlet />
            {/* <AdminFooter /> */}
          </Box>
        </AdminAppState>
      </ThemeProvider>
    </>
  );
}
