import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Colors } from "../../../../styles/theme/UserTheme";

// Claimp
export const clamp = (min: number, max: number) => (v: number) =>
  v <= min ? min : v >= max ? max : v;

type Props = {};

export default function IncreaseDecrease({}: Props) {
  const clampV = clamp(1, 10);
  const [value, setValue] = useState<number>(1);
  return (
    <Box display={"flex"}>
      {/* Decrease */}
      <IconButton
        sx={{ borderRadius: 0, background: `${Colors.secondary}` }}
        onClick={() => setValue(clampV(value - 1))}
      >
        <Remove />
      </IconButton>
      <Typography
        variant="h6"
        sx={{ border: `1px solid ${Colors.secondary}`, p: 2 }}
      >
        {value}
      </Typography>
      {/* Increase */}
      <IconButton
        sx={{ borderRadius: 0, background: `${Colors.secondary}` }}
        onClick={() => setValue(clampV(value + 1))}
      >
        <Add />
      </IconButton>
    </Box>
  );
}
