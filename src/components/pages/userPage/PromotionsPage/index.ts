import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../../../../styles/theme";

export { default } from "./PromotionsPage";

type containerProps = {
  theme: any;
};
export const PromotionContainer = styled(Box)(({ theme }: containerProps) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  background: Colors.secondary,
}));

// Message Text
type messageTextProps = {
  theme: any;
};
export const MessageText = styled(Typography)(
  ({ theme }: messageTextProps) => ({
    fontFamily: '"imes New Roman, Times, serif"',
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
    color: Colors.white,
    fontSize: "1.5rem",
  })
);
