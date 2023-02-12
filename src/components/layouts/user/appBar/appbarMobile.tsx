import { Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "./style";
import Actions from "./actions";

type Props = { matches: any };

export default function AppbarMobile({ matches }: Props) {
  return (
    <AppbarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h5">
        My MUI
      </AppbarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
