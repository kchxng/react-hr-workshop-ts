import { Box, Button, IconButton, styled } from "@mui/material";
import { slideInBottom, slideInRight } from "../../../../../styles/animation";
import { Colors } from "../../../../../styles/theme";

// Product Item
type productProps = {
  theme: any;
};
export const ProductItem = styled(Box)((props: productProps) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [props.theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

// Image
type ImgProps = {
  src: any;
  theme: any;
};
export const ProductImage = styled("img")((props: ImgProps) => ({
  src: `url(${props.src})`,
  width: "100%",
  background: Colors.light_gray,
  padding: "10px",
  borderRadius: "4px",
  [props.theme.breakpoints.down("md")]: {
    width: "75%",
    padding: "24px",
  },
}));

// Product Action
export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

// ProductFavButton
type ProFavBtnProps = {
  isFav: any;
  theme: any;
};
export const ProductFavButton = styled(ProductActionButton, {
  shouldForwardProp: (props) => props !== "isFav",
})((props: ProFavBtnProps) => ({
  color: props.isFav ? Colors.primary : Colors.light,
  [props.theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

//productAddToCart
type ProAddToCartProps = {
  show: any;
  theme: any;
};
export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (props) => props !== "show",
})((props: ProAddToCartProps) => ({
  width: "120px",
  fontSize: "12px",
  // animation
  [props.theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    paddig: "10px 5px",
    animation:
      props.show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450,0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

// ProductMetaWrapper
type ProMetaWrapperProps = {
  theme: any;
};
export const ProductMetaWrapper = styled(Box)((props: ProMetaWrapperProps) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// ProductActionWrapper
type ProActionWrapperProps = {
  show: any;
  theme: any;
};
export const ProductActionWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "show",
})((props: ProActionWrapperProps) => ({
  [props.theme.breakpoints.up("md")]: {
    display: props.show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      props.show &&
      `${slideInRight} 0.5s 0.5s cubic-bezier(0.250, 0.460, 0.450,0.940) both`,
  },
}));
