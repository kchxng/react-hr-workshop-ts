import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import BitcoinSelection from "../bitcionPurchagePage/bitcoinSelection";

type Props = {};

export default function BitcoinTransferPage({}: Props) {
  const { state } = useAppState();
  return (
    <Card raised>
      {/* Header */}
      <CardHeader
        title={
          <Typography
            variant="h5"
            color="secondary"
            textAlign="center"
            fontFamily={"'Times New Roman', Times, serif"}
          >
            Bitcoin transfer
          </Typography>
        }
      />
      {/* Content Transfer */}
      <CardContent
        sx={{
          background:
            state.theme === "light" ? ColorsAdmin.white : ColorsAdmin.dark,
        }}
      >
        <Grid2 container>
          <Grid2 xs={12} sm={6}>
            <Box display="flex">
              <FormControl>
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
                  label="Wallet from"
                  helperText="2xaD42FxvR42dDfasdf"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
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
                label="Wallet to"
                helperText="2xaD42FxvR42dDfasdf"
                variant="outlined"
                size="small"
              />
              <BitcoinSelection />
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
            Transfer now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
