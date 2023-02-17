import { Close, Search } from "@mui/icons-material";
import {
  IconButton,
  Slide,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled, Box } from "@mui/system";

import React from "react";
import { useUIContext } from "../../../../styles/contextUI";
import { Colors } from "../../../../styles/theme/UserTheme";

const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: Colors.light_gray,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 99999,
  opacity: 0.98,
}));

type TxtFieldProps = {
  theme: any;
};
const SearchField = styled(TextField)(({ theme }: TxtFieldProps) => ({
  ".MuiInputLabel-root": {
    color: Colors.white,
  },
  ".MuiInput-root": {
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    color: Colors.dark,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.white}`,
  },
  padding: "0px 35px 0px 0px",
}));

type Props = {};

export default function SearchBox({}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { showSearchBox, setShowSearchBox } = useUIContext();
  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <IconButton>
          <Search sx={{ fontSize: { xs: "2rem", md: "2rem" } }} color="error" />
        </IconButton>
        <SearchField
          theme={theme}
          color="secondary"
          variant="standard"
          // value="menu"
          autoFocus
          fullWidth
          placeholder="search lsx.com.la"
        />

        <IconButton
          onClick={() => {
            setShowSearchBox(false);
          }}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Close sx={{ fontSize: "2rem" }} color="error" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
}
