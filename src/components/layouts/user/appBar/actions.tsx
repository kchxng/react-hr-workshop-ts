import LoginIcon from "@mui/icons-material/Login";
import MessageIcon from "@mui/icons-material/Message";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
  MyList,
} from "./style";
import { Colors } from "../../../../styles/theme/UserTheme";
import { useNavigate } from "react-router-dom";

type Props = { matches: any };

const Actions = ({ matches }: Props) => {
  const navigate = useNavigate();
  const menuList = [
    { code: 101, name: "", icon: "", path: "" },
    { code: 102, name: "", icon: "", path: "" },
    { code: 103, name: "login", icon: "", path: "" },
  ];

  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        {/* ShoppingCart */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        {/* message */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <MessageIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        {/* login */}
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
            onClick={() => navigate("admin-dashboard")}
          >
            <LoginIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
};

export default Actions;
