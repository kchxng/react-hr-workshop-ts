import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import BitcoinSelection from "./bitcoinSelection";
import BitcoinCurrencySelect from "./bitcoinCurrencySelect";

type Props = {};

export default function BitcionPurchangePage({}: Props) {
  const { state } = useAppState();

  return (
    <Card raised sx={{ mb: 4 }}>
      <CardHeader
        title={
          <Typography
            variant="h5"
            color={"secondary"}
            textAlign="center"
            fontFamily={"'Times New Roman', Times, serif"}
          >
            Buy Bitcoin
          </Typography>
        }
      />
      <CardContent
        sx={{
          background:
            state.theme === "light" ? ColorsAdmin.white : ColorsAdmin.dark,
        }}
      >
        <Grid2 container>
          <Grid2 xs={12} sm={6}>
            <Box display="flex">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: ColorsAdmin.primary,
                      borderRadius: 50,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "0.65rem",
                    color: ColorsAdmin.muted,
                  },
                }}
                label="Payment"
                helperText="0.03"
                variant="outlined"
                size="small"
              />
              {/* <h2>Bitcoin Select</h2> */}
              <BitcoinSelection />
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Box display="flex">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: ColorsAdmin.primary,
                      borderRadius: 50,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "0.65rem",
                    color: ColorsAdmin.muted,
                  },
                }}
                label="Amount"
                helperText="1000"
                variant="outlined"
                size="small"
              />
              {/* <h1>Currency Select</h1> */}
              <BitcoinCurrencySelect />
            </Box>
          </Grid2>
        </Grid2>
        <Box sx={{ p: 2, mt: 4 }}>
          <Button
            sx={{
              fontFamily: "'Play', sans-serif",
              p: 2,
              borderRadius: 50,
              width: "100%",
              boxShadow: "5px 5px 16px -3px rgba(226,84,255,0.42)",
              background:
                "linear-gradient(90deg, rgba(170,0,255,1) 0%, rgba(68,138,255,1) 100%)",
            }}
            variant="contained"
          >
            Buy now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
