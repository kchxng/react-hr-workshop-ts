import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "../AdminFooter/AdminFooter";
import AdminHeader from "../AdminHeader/AdminHeader";

type Props = {};

export default function AdminContentPage({}: Props) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* line for below components */}
        <CssBaseline />
        <AdminHeader />
        <Outlet />
        <AdminFooter />
      </Box>
    </>
  );
}
