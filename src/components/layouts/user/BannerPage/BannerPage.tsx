import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from ".";

type Props = {};

export default function BannerPage({}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage
        src={`${process.env.PUBLIC_URL}/logo512.png`}
        theme={theme}
      />
      <BannerContent>
        <Typography variant="h6">H-Tech Collection</Typography>
        <BannerTitle variant="h2">My Banner</BannerTitle>
        <BannerDescription variant="h6">
          The Toreador Song is the popular name for the aria "Votre toast, je
          peux vous le rendre" ("I toast you"), from the French opera Carmen,
          composed by Georges
        </BannerDescription>
        <BannerShopButton variant="contained" color="primary">
          Show Now
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
