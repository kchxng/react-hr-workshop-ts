import { Favorite, FitScreen, Share } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Product } from "../../../../models/Product.model";
import ProductDetailPage from "../../../pages/userPage/ProductDetailPage/ProductDetailPage";
import ProductMeta from "./ProductMeta";
import {
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  ProductItem,
} from "./productStyle";

type Props = {
  product: Product;
  matches: any;
};

export default function SingleProductMobilePage({ product, matches }: Props) {
  // select product to show at detail
  const [selectProduct, setSelectProduct] = useState<Product | null>(null);

  const [openProductDetailDialog, setOpenProductDetailDialog] =
    useState<boolean>(false);
  const handleOpenDialog = () => {
    setOpenProductDetailDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenProductDetailDialog(false);
  };

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    /**
     * Product
     * Image
     * Meta
     * Action
     */
    <>
      <ProductItem
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <h4>Mobile</h4> */}
        <ProductImage src={product.image} theme={undefined} />
        <ProductMeta product={product} matches={matches} />
        {/* FavoriteIcon */}
        <ProductActionWrapper show={undefined} theme={undefined}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductFavButton theme={matches} isFav={0}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <Share color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton
              onClick={() => {
                setSelectProduct(product);
                setOpenProductDetailDialog(true);
              }}
            >
              <Tooltip placement="left" title="Full view">
                <FitScreen color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </ProductItem>
      <ProductAddToCart variant="contained" theme={undefined} show={undefined}>
        Add to Cart
      </ProductAddToCart>
      {/* show product detail Dialog */}
      <ProductDetailPage
        open={openProductDetailDialog}
        handleClose={handleCloseDialog}
        product={selectProduct}
      />
    </>
  );
}
