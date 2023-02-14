import { Typography } from "@mui/material";
import React from "react";
import { Product } from "../../../../models/Product.model";
import { ProductMetaWrapper } from "./productStyle";

type Props = {
  product: Product;
  matches: any;
};

export default function ProductMeta({ product, matches }: Props) {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        {product.price}
      </Typography>
    </ProductMetaWrapper>
  );
}
