import { Login, Message, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
  MyList,
} from "./style";
import { Colors } from "../../../../styles/theme";

type Props = { matches: any };
const Actions = ({ matches }: Props) => {
  const menuList = [
    { code: 101, name: "", icon: "", path: "" },
    { code: 102, name: "", icon: "", path: "" },
    { code: 103, name: "login", icon: "", path: "" },
  ];

  const Component: any = matches
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
            <ShoppingCart />
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
            <Message />
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
          >
            <Login />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
};

export default Actions;
