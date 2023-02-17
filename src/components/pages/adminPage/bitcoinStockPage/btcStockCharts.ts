// const categoriesData = [
//   2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
// ];

export const btcStockCharts: any = (data: any, bg: any, theme: any) => ({
  options: {
    chart: {
      dropShadow: {
        enabled: true,
        color: theme === "dark" ? bg : "#00FF00",
        top: 4,
        left: 4,
        blur: 10,
        opacity: 0.5,
      },
      parentHeightOffset: 0,
      height: 320,
      id: "basic-line",
      background: theme === "dark" ? "#222831" : "light",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
    },
    stroke: {
      curve: "smooth",
      colors: theme === "dark" ? bg : "#00FF00",
    },
    tooltip: {
      theme: theme === "dark" ? "dark" : "light",
      // enabled: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: [
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
          ],
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      categories: [
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: [
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
            theme === "dark" ? "#fff" : "#222831",
          ],
        },
      },
    },
    series: [
      {
        name: "series-Btc1",
        data: data,
      },
    ],
  },
});
