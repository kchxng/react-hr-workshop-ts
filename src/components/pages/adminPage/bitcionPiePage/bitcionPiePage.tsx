import { Card, CardContent, CardHeader } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";

type Props = {};

export default function BitcionPiePage({}: Props) {
  const [state, setState]: any = useState({
    series: [44, 55, 13, 43],
    options: {
      fill: {
        colors: [
          ColorsAdmin.bitcoin,
          ColorsAdmin.ethereum,
          ColorsAdmin.ripple,
          ColorsAdmin.blackcoin,
        ],
        // type: "gradient",
      },
      stroke: {
        show: false,
      },
      // dataLabels: {
      //   enabled: true,
      //   style: {
      //     colors: ["#111"],
      //   },
      // },
      plotOptions: {
        expandOnClick: false,
        pie: {
          donut: {
            labels: {
              show: true,
              // total: {
              //   show: true,
              //   color: "#FF9800",
              //   fontSize: 30,
              // },
            },
          },
        },
      },
      colors: [
        ColorsAdmin.bitcoin,
        ColorsAdmin.ethereum,
        ColorsAdmin.ripple,
        ColorsAdmin.blackcoin,
      ],
      // colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
      labels: ["Bitcoin", "Ethereum", "Ripple", "Blackcoin"],
      legend: {
        show: true,
        labels: {
          useSeriesColors: true,
        },
      },
      responsive: [
        {
          options: {
            legend: {
              position: "top",
              markers: {
                shape: "square",
              },
            },
          },
        },
      ],
    },
  });
  return (
    <>
      <Card raised sx={{ height: "530px" }}>
        <CardHeader sx={{ p: 4 }} title={"Pie"} />

        <CardContent
          sx={{
            p: 0,
            "&.MuiCardContent-root": {
              paddingBottom: 0,
            },
          }}
        >
          <Chart
            options={state.options}
            series={state.series}
            height="420"
            type="donut"
          />
        </CardContent>
      </Card>
    </>
  );
}
