import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "./style";
import Actions from "./actions";
import { useUIContext } from "../../../../styles/contextUI";

type Props = { matches: any };

export default function AppbarMobile({ matches }: Props) {
  const { drawerOpen, setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer matches={matches.toString()}>
      <IconButton
        onClick={() => setDrawerOpen(true)}
        // onMouseEnter={() => setDrawerOpen(true)}
        //  onMouseLeave={() => setDrawerOpen(false)}
      >
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h5">
        My MUI
      </AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <Search />
      </IconButton>
      <Actions matches={matches.toString()} />
    </AppbarContainer>
  );
}
