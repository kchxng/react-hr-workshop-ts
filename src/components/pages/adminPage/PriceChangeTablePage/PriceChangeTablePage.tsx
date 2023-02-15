import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { StockExchange } from "../../../../models/StockExchange.model";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";

// Data
const rowsStockData = [
  {
    id: 1,
    name: "Bitcion",
    changeAmt: -32.23,
    changePercent: -0.6,
    high: 0.23,
    low: 0.47,
  },
  {
    id: 2,
    name: "Blackcion",
    changeAmt: 43.56,
    changePercent: +0.9,
    high: 3.7,
    low: 4.3,
  },
  {
    id: 3,
    name: "Ethereum",
    changeAmt: 262.55,
    changePercent: +16.0,
    high: 24.0,
    low: 1.4,
  },
  {
    id: 4,
    name: "Ripple",
    changeAmt: -1230.4,
    changePercent: -3.7,
    high: 6.7,
    low: 4.3,
  },
  {
    id: 5,
    name: "Stellar",
    changeAmt: 356.56,
    changePercent: +21.0,
    high: 49.33,
    low: 3.9,
  },
  {
    id: 6,
    name: "BCEL",
    changeAmt: 14.56,
    changePercent: 0,
    high: 100.0,
    low: 50.0,
  },
];

type Props = {};

export default function PriceChangeTablePage({}: Props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card raised sx={{ minHeight: 600 }}>
      <CardHeader
        sx={{ mb: 4 }}
        title={
          <Typography
            variant="h5"
            color="secondary"
            textAlign={"center"}
            fontFamily={"'Times New Roman', Times, serif"}
          >
            Price Change
          </Typography>
        }
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table
          //  size={matches ? "small" : "medium"}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography sx={{ color: ColorsAdmin.muted }}>
                    Type
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ color: ColorsAdmin.muted }}>
                    Change
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ color: ColorsAdmin.muted }}>
                    Change
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: ColorsAdmin.muted }}>
                  <Box display={"flex"} justifyContent="center">
                    <Typography>High</Typography>
                    <ArrowDropUpIcon sx={{ color: ColorsAdmin.success }} />
                  </Box>
                </TableCell>
                <TableCell sx={{ color: ColorsAdmin.muted }}>
                  <Box display={"flex"} justifyContent="center">
                    <Typography>Low</Typography>
                    <ArrowDropDownIcon sx={{ color: ColorsAdmin.danger }} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* Rows of data */}
            <TableBody>
              {rowsStockData.map((item, i) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="center">$ {item.changeAmt}</TableCell>
                  <TableCell align="center">
                    {/* <Box justifyContent="center"> */}
                    {/* Check percent */}
                    {item.changePercent > 0 && (
                      <ArrowDropUpIcon sx={{ color: ColorsAdmin.success }} />
                    )}
                    {item.changePercent < 0 && (
                      <ArrowDropDownIcon sx={{ color: ColorsAdmin.danger }} />
                    )}
                    {item.changePercent} %{/* </Box> */}
                  </TableCell>
                  <TableCell align="center">$ {item.high}</TableCell>
                  <TableCell align="center">$ {item.low}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
