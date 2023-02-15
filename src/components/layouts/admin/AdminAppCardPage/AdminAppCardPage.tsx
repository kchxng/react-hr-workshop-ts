import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Chart from "react-apexcharts";
import { useAppState } from "../../../../styles/contextUI/AdminAppState";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import { AdminApexChartOptions } from "../AdminStockcharts/AdminCardChart";

type Props = {
  title: string;
  subheader: string;
  avatar: any;
  trend: any;
  trendDirection: string;
  data: any;
  bg: any;
};

export default function AdminAppCard({
  avatar,
  title,
  subheader,
  trend,
  trendDirection,
  data,
  bg,
}: Props) {
  const { state } = useAppState();
  const [chartOptions, setChartOptions] = useState(
    AdminApexChartOptions(data, bg, state.theme)
  );

  useEffect(() => {
    setChartOptions(AdminApexChartOptions(data, bg, state.theme));
  }, [state.theme]);

  return (
    <Card raised sx={{ maxHeight: 300, borderRadius: "2px", m: 1 }}>
      <CardHeader
        avatar={<Avatar src={`${process.env.PUBLIC_URL}/images/${avatar}`} />}
        title={
          <Typography
            variant="h6"
            fontFamily={"'Times New Roman', Times, serif"}
          >
            {title}
          </Typography>
        }
        subheader={
          <Box display="flex" justifyContent="space-between">
            {subheader}
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle1">{trend}</Typography>
              {trendDirection === "down" ? (
                <TrendingDownIcon sx={{ ml: 1, color: ColorsAdmin.danger }} />
              ) : (
                <TrendingUpIcon sx={{ ml: 1, color: ColorsAdmin.success }} />
              )}
            </Box>
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
          height="200px"
          options={chartOptions.options}
          series={chartOptions.options.series}
          type="line"
        />
      </CardContent>
    </Card>
  );
}
