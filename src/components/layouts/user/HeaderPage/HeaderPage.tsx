import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AppBar from "../appBar";
import AppbarDesktop from "../appBar/appbarDesktop";
import AppbarMobile from "../appBar/appbarMobile";

type Props = {};

export default function HeaderPage({}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {/* Mobile and Desktop AppBar */}
      {/* <AppBar /> */}
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
