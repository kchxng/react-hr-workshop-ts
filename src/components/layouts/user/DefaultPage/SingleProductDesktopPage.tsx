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

export default function SingleProductDesktopPage({ product, matches }: Props) {
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

  // show option
  const [showOption, setShowOption] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setShowOption(true);
  };

  const handleMouseLease = () => {
    setShowOption(false);
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
        onMouseLeave={handleMouseLease}
        theme={matches}
      >
        {/* <h2>Desktop</h2> */}
        <ProductImage src={product.image} theme={matches} />
        <ProductFavButton theme={undefined} isFav={0}>
          <Favorite />
        </ProductFavButton>

        {(showOption || matches) && (
          <ProductAddToCart
            theme={undefined}
            show={showOption}
            variant="outlined"
          >
            Add to Cart
          </ProductAddToCart>
        )}

        {/* FavoriteIcon */}
        <ProductActionWrapper theme={undefined} show={showOption || matches}>
          <Stack direction={matches ? "row" : "column"}>
            {/* Mobile */}
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
      {/* <ProductAddToCart variant="contained" theme={matches} show={0}>
        Add to Cart
      </ProductAddToCart> */}
      {/* Product title and price */}
      <ProductMeta product={product} matches={undefined} />

      {/* Show Product Detail Dialog */}  
      <ProductDetailPage
        open={openProductDetailDialog}
        product={selectProduct}
        handleClose={handleCloseDialog}
      />
    </>
  );
}
