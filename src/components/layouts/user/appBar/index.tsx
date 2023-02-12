import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

export default function AppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {/* If true is Mobile else Desktop  */}
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
