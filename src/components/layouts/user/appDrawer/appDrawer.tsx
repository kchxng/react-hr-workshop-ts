import { Close } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { lighten } from "polished";
import React, { useState } from "react";
import { useUIContext } from "../../../../styles/contextUI";
import { Colors } from "../../../../styles/theme";
import { DrawerCloseButton } from "../appBar/style";

const MiddleDivider = styled((props: any) => (
  <Divider variant="middle" {...props} />
))``;

type AppDrawerProps = {
  open: boolean;
  onHandleDrawerClose: () => void;
};

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  // const {  } = useUIContext({drawerOpen,setDrawerOpen});
  // Open Menu
  // const [open, setOpen] = React.useState<boolean>(false);

  // const handleClickDrawer = () => {
  //   setOpen(!open);
  // };

  // // const handleDrawerOpen = () => {
  // //   // setOpen(true);
  // // };

  // const handleDrawerClose = () => {
  //   // setOpen(false);
  //   props.onHandleDrawerClose();
  // };
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <Close
            sx={{ fontSize: "2.5rem", color: lighten(0.09, Colors.secondary) }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
}
