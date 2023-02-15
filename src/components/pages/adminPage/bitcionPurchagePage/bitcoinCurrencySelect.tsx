import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

type Props = {};

export default function BitcoinCurrencySelect({}: Props) {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <Select
          value="usd"
          sx={{
            "&.MuiInputBase-root:before": {
              border: "none",
            },
          }}
        >
          <MenuItem value="usd">USD</MenuItem>
          <MenuItem value="lak">LAK</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
