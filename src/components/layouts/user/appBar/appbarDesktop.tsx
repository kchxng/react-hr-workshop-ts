import { Search } from "@mui/icons-material";
import { ListItemText, ListItemButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "./style";
import Actions from "./actions";

type Props = { matches: any };

export default function AppbarDesktop({ matches }: Props) {
  return (
    <>
      {/*
       *AppBar
       *Container
       * Header
       * *List
       */}

      <AppbarContainer>
        <AppbarHeader>My MUI</AppbarHeader>
        <MyList type="row">
          <ListItemText primary="Home" />
          <ListItemText primary="Categories" />
          <ListItemText primary="Products" />
          <ListItemText primary="Contact Us" />
          <ListItemButton sx={{ justifyContent: "center" }}>
            <Search />
          </ListItemButton>
        </MyList>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  );
}
