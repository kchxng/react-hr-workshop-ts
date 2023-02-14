import { Search } from "@mui/icons-material";
import {
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "./style";
import Actions from "./actions";
import { useUIContext } from "../../../../styles/contextUI";

type Props = { matches: any };

export default function AppbarDesktop({ matches }: Props) {
  const { showSearchBox, setShowSearchBox } = useUIContext();
  return (
    <>
      {/*
       *AppBar
       *Container
       * Header
       * *List
       */}

      <AppbarContainer matches={matches.toString()}>
        <AppbarHeader>My MUI</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact Us" />
          <ListItemButton
            onClick={() => setShowSearchBox(true)}
            sx={{ justifyContent: "center" }}
          >
            {/* <IconButton onClick={() => setShowSearchBox(true)}> */}
            <Search />
            {/* </IconButton> */}
          </ListItemButton>
        </MyList>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
}
