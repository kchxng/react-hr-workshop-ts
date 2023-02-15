import { Box, Button, styled, Typography } from "@mui/material";
import theme, { Colors } from "../../../../styles/theme/UserTheme";
export { default } from "./BannerPage";
type Props = {
  theme: any;
};
export const BannerContainer = styled(Box)(({ theme }: Props) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

// Image Banner
type bannerImgProps = {
  src: any;
  theme: any;
};
export const BannerImage = styled("img")(({ src, theme }: bannerImgProps) => ({
  src: `url(${src})`,
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

// Banner Contents
export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

// Banner Title
export const BannerTitle = styled(Typography)(() => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

// Banner Description
export const BannerDescription = styled(Typography)(() => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

// Banner Shop Button
type BannerShopBtnProps = {
  theme: any;
};
export const BannerShopButton = styled(Button, {
  shouldForwardProp: (prop: any) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
  overridesResolver: (props: any, styles: any) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }: BannerShopBtnProps) => ({
  padding: "20px 0px",
  color: Colors.white,
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));
