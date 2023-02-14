import {
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { products } from ".";
import SingleProductDesktopPage from "./SingleProductDesktopPage";
import SingleProductMobilePage from "./SingleProductMobilePage";

type Props = {};

export default function DefaultPage({}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((item, i) => (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      key={item.id}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <SingleProductMobilePage product={item} matches={matches} />
      ) : (
        <SingleProductDesktopPage product={item} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        spacing={{ xs: 2, md: 3 }}
        container
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
