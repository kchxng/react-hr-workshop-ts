import {
  AccountCircle as AccountCircleIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  alpha,
  AppBar as MUIAppBar,
  Badge,
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import { drawerWidth } from "../AdminAppDrawer/AdminAppDrawer";

type AppbarProps = {
  theme: any;
  open: boolean;
};
const AppBar = styled(MUIAppBar)(({ theme, open }: AppbarProps) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.shart,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//search box
type SearchProps = {
  theme: any;
};
const SearchBox = styled("div")(({ theme }: SearchProps) => ({
  position: "relative",
  borderRadius: theme.shape.searchbar.borderRadius,
  backgroundColor: alpha(ColorsAdmin.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(ColorsAdmin.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

type SearchIconWrapperProps = {
  theme: any;
};
const SearchIconWrapper = styled("div")(
  ({ theme }: SearchIconWrapperProps) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },
}));

type Props = { switchColorMode: any };

export default function AdminAppbar({ switchColorMode }: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  //   const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const { state, dispatch } = useAppState();

  const [themeModeSwitch, setThemeModeSwitch] = useState<boolean>(false);
  //   Change Theme Mode
  //   const [themeMode, setThemeMode] = useState<string>("Light");

  useEffect(() => {
    dispatch({ type: "theme-switch" });
    // switch theme color
    switchColorMode(themeModeSwitch);
  }, [themeModeSwitch]);

  return (
    <Box sx={{ display: 1 }}>
      <AppBar position="fixed" theme={undefined} open={state.drawer}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            sx={{ marginRight: 2, ...(state.drawer && { display: "none" }) }}
            onClick={() => dispatch({ type: "drawer" })}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Times New Roman', Times, serif",
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block" },
              //   fontSize: `${matches ? "14px" : "18px"}`,
            }}
          >
            HR System Dashboard
          </Typography>
          <SearchBox sx={{ mr: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </SearchBox>

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "10%",
              },
            }}
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box sx={{ flexGrow: 1 }} />
            {matches && <SearchIcon />}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon sx={{ color: ColorsAdmin.white }} />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="account of current user"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <AccountCircleIcon sx={{ color: ColorsAdmin.white }} />
            </IconButton>
            {/* <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <Settings sx={{ color: ColorsAdmin.white }} />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={themeModeSwitch} />}
              label={themeModeSwitch ? "Dark" : "Light"}
              onClick={() => setThemeModeSwitch((s) => !s)}
            />
          </FormGroup>
        </MenuItem>
        <MenuItem onClick={() => console.log("close profile")}>
          Profile
        </MenuItem>

        <MenuItem onClick={() => console.log("close account")}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
