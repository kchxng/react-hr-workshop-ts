import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import { btcStockCharts } from "./btcStockCharts";

type Props = {};

export default function BitcoinStockPage({}: Props) {
  const { state } = useAppState();
  const btcStockData: any = [
    10, 60, 125, 150, 129, 149, 170, 199, 230, 260, 259,
  ];
  const [chartOptions, setChartOptions] = useState<any>(
    btcStockCharts(btcStockData, ColorsAdmin.primary, state.theme)
  );

  useEffect(() => {
    setChartOptions(
      btcStockCharts(btcStockData, ColorsAdmin.primary, state.theme)
    );
  }, [state.theme]);

  return (
    <>
      <Card raised>
        <CardHeader
          sx={{ p: 4 }}
          title={
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" fontFamily={"'Play', sans-serif"}>
                BTC $7632.23
              </Typography>
              {/* <BitcoinSelect /> */}
            </Box>
          }
        />

        <CardContent
          sx={{
            p: 0,
            "&.MuiCardContent-root": {
              paddingBottom: 0,
            },
          }}
        >
          <Chart
            options={chartOptions.options}
            series={chartOptions.options.series}
            type="line"
            height="420"
          />
        </CardContent>
      </Card>
    </>
  );
}
