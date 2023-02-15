import styled from "@emotion/styled";
import {
  Close,
  Facebook,
  Favorite,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Product } from "../../../../models/Product.model";
import { Colors } from "../../../../styles/theme/UserTheme";
import {
  ProductImage,
  ProductItem,
} from "../../../layouts/user/DefaultPage/productStyle";
import IncreaseDecrease from "./ProductDetailStyle";

function SlideTransaction(props: any) {
  return <Slide direction="down" {...props} />;
}

type ProductAcWrapperProps = {
  theme: any;
};
const ProductDetailWrapper = styled(Box)(
  ({ theme }: ProductAcWrapperProps) => ({
    display: "flex",
    padding: theme.spacing(4),
  })
);

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

//
type Props = {
  open: boolean;
  handleClose: () => void;
  product: Product | null;
};
export default function ProductDetailPage({
  open,
  handleClose,
  product,
}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDialog, setopenDialog] = useState<boolean>(false);

  if (product === null) {
    return null;
  }
  //   else !==null
  return (
    <Dialog
      TransitionComponent={SlideTransaction}
      open={open}
      fullScreen
      //   onClose={onClose}
    >
      <DialogTitle sx={{ background: Colors.secondary }}>
        <Box display={"flex"} justifyContent="space-between">
          Product Title
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {/* matches is true = mobile : desktop */}
        <ProductDetailWrapper
          theme={theme}
          flexDirection={matches ? "column" : "row"}
        >
          <ProductItem sx={{ mr: 4 }}>
            <ProductImage theme={undefined} src={`${product.image}`} />
          </ProductItem>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1">SKu 123</Typography>
            <Typography variant="subtitle1">Availabilty: 5 in stock</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <IncreaseDecrease />
              <Button variant="contained">Add to Cart</Button>
            </Box>
            <Box
              display={"flex"}
              alignItems="center"
              sx={{ mt: 4, color: Colors.light }}
            >
              <Favorite sx={{ mr: 2 }} />
              Add to wishlist
            </Box>
            <Box sx={{ mt: 4, color: Colors.light }}>
              <Facebook />
              <Twitter sx={{ pl: theme.spacing(4) }} />
              <Instagram sx={{ pl: theme.spacing(4) }} />
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
