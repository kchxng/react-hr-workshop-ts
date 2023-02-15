import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ColorsAdmin } from "../../../../styles/theme/AdminTheme";
import TickerElement from "./tickerElement";

type Props = {};

export default function ExchangeRateTickerPage({}: Props) {
  const tickerContainerRef: any = useRef();
  const [parentRect, setParentRect] = useState({});

  useEffect(() => {
    setParentRect(tickerContainerRef.current.getBoundingClientRect());
  }, [tickerContainerRef]);
  return (
    <Box
      ref={tickerContainerRef}
      sx={{
        overflow: "hidden",
        position: "relative",
        height: "60px",
      }}
    >
      {tickerContainerRef.current && (
        <TickerElement parentRect={parentRect}>
          <Box display="flex" sx={{ p: 1 }}>
            {/* Exchange Rate1 */}
            {/* increase */}
            <Box display="flex" flexDirection="column" sx={{ pr: 8 }}>
              <Box display="flex">
                <Typography variant="h5">26,172.75</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: ColorsAdmin.muted,
                    alignSelf: "self-end",
                    ml: 0.5,
                  }}
                >
                  CAD
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="top"
                sx={{ color: ColorsAdmin.success }}
              >
                <Typography variant="caption">+67.35</Typography>
                <Typography variant="caption">(0.26%)</Typography>
                <Typography variant="caption">
                  <ArrowUpwardIcon sx={{ fontSize: "1.125rem" }} />
                </Typography>
                <Typography variant="caption">today</Typography>
              </Box>
            </Box>

            {/* decrease */}
            <Box display="flex" flexDirection="column" sx={{ pr: 8 }}>
              <Box display="flex">
                <Typography variant="h5">26,172.75</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: ColorsAdmin.muted,
                    alignSelf: "self-end",
                    ml: 0.5,
                  }}
                >
                  CAD
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="top"
                sx={{ color: ColorsAdmin.danger }}
              >
                <Typography variant="caption">-67.35</Typography>
                <Typography variant="caption">(0.26%)</Typography>
                <Typography variant="caption">
                  <ArrowDownwardIcon sx={{ fontSize: "1.125rem" }} />
                </Typography>
                <Typography variant="caption">today</Typography>
              </Box>
            </Box>

            {/* show exchange rate 2 */}
            {/* increase2 */}
            <Box display="flex" flexDirection="column" sx={{ pr: 8 }}>
              <Box display="flex">
                <Typography variant="h5">28,172.85</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: ColorsAdmin.muted,
                    alignSelf: "self-end",
                    ml: 0.5,
                  }}
                >
                  CAD
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="top"
                sx={{ color: ColorsAdmin.success }}
              >
                <Typography variant="caption">+67.35</Typography>
                <Typography variant="caption">(0.26%)</Typography>
                <Typography variant="caption">
                  <ArrowUpwardIcon sx={{ fontSize: "1.125rem" }} />
                </Typography>
                <Typography variant="caption">today</Typography>
              </Box>
            </Box>
            {/* decrease */}
            <Box display="flex" flexDirection="column" sx={{ pr: 8 }}>
              <Box display="flex">
                <Typography variant="h5">29,172.80</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: ColorsAdmin.muted,
                    alignSelf: "self-end",
                    ml: 0.5,
                  }}
                >
                  CAD
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="top"
                sx={{ color: ColorsAdmin.danger }}
              >
                <Typography variant="caption">-67.35</Typography>
                <Typography variant="caption">(0.26%)</Typography>
                <Typography variant="caption">
                  <ArrowDownwardIcon sx={{ fontSize: "1.125rem" }} />
                </Typography>
                <Typography variant="caption">today</Typography>
              </Box>
            </Box>
          </Box>
        </TickerElement>
      )}
    </Box>
  );
}
