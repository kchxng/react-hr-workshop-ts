import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

type Props = {};

export default function BitcoinSelection({}: Props) {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <Select
          value="bitcoin"
          sx={{
            "&.MuiInputBase-root:before": {
              border: "none",
            },
          }}
        >
          <MenuItem value="bitcoin">Bitcoin</MenuItem>
          <MenuItem value="ethereum">Ethereum</MenuItem>
          <MenuItem value="ripple">Ripple</MenuItem>
          <MenuItem value="blackcoin">BlackCoin</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
