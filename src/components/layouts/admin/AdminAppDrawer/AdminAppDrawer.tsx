import {
  Collapse,
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
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SummarizeAnnualReportIcon from "@mui/icons-material/Summarize";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WorkIcon from "@mui/icons-material/Work";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SecurityIcon from "@mui/icons-material/Security";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ArticleIcon from "@mui/icons-material/Article";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PublicIcon from "@mui/icons-material/Public";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import DiscountIcon from "@mui/icons-material/Discount";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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

  // open collepse menu
  // const [openCollepseMenu, setOpenCollepseMenu] = useState<boolean>(true);

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
        {/* User  */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText
              primary={"User"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Calendar & Etc User */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Calendar & User"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Notice */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Notice"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* News */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText
              primary={"News"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Annual Report */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SummarizeAnnualReportIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Annual Report"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Financial statement */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Financial statement"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Job Opportunities */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <WorkIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Job Opportunities"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* IPO Showcase */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CardMembershipIcon />
            </ListItemIcon>
            <ListItemText
              primary={"IPO Showcase"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Laws */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Laws"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Regulations */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Regulations"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Other Legislation */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Other Legislation"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Education */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CastForEducationIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Education"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Research */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <ContentPasteSearchIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Research"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Articles */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Article"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Question &Answer */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText
              primary={"A&Q"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Events & Activities */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NaturePeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Event & Activities"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Publication */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PublicIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Publication"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Block Trading Data */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <WaterfallChartIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Block Trading Data"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Factsheet */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Factsheet"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* LSX Holiday */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              justifyContent: state.drawer ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <EventBusyIcon />
            </ListItemIcon>
            <ListItemText
              primary={"LSX Holiday"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Stock Calendar */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Stock Calendar"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Disclosure */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <DiscountIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Disclosure"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        {/* Main Hightlight */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Main Hightlight"}
              sx={{ opacity: state.drawer ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
{/* AccountTreeIcon */}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{ justifyContent: state.drawer ? "initial" : "center" }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: state.drawer ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText
              primary={"LSX Organizational"}
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
                minWidth: 0,
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
                minWidth: 0,
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
