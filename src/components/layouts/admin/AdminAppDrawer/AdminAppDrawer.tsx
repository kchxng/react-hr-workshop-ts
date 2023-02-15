import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";

export const drawerWidth = 240;

// We have two thing at this page and AdminDetail page
const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} - 100px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // background:'blue',
  padding: theme.spacing(0, 1),
  // border: "1px solid red",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

type HeaderTitleProps = {
  theme: any;
};
export const HeaderTitle = styled(Typography)(
  ({ theme }: HeaderTitleProps) => ({
    fontFamily: "'Play', sans-serif",
    fontSize: "1.5rem",
    lineHeight: 0.5,
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.25rem",
      lineHeight: 1.25,
      letterSpacing: 0.005,
    },
  })
);

type AdminDrawerProps = {
  theme: any;
  open: any;
};
const AdminDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: AdminDrawerProps) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {};

export default function AdminAppDrawer({}: Props) {
  const theme = useTheme();
  const { state, dispatch } = useAppState();

  return (
    <AdminDrawer variant="permanent" open={state.drawer} theme={undefined}>
      <DrawerHeader>
        {/* <Stack
          direction={"row"}
          alignItems="center"
          sx={{ border: "1px solid red" }}
        > */}
        <img
          src={`${process.env.PUBLIC_URL}/images/lsx_logo.jpg`}
          alt=""
          style={{ height: 40, paddingRight: "12px" }}
        />
        <IconButton onClick={() => dispatch({ type: "drawer" })}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
        {/* </Stack> */}
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Inbox"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Payments"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Analytics"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <TextSnippetIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Reports"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </AdminDrawer>
  );
}
