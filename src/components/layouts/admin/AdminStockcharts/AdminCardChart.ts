export const AdminApexChartOptions: any = (data: any, bg: any, theme: any) => ({
  options: {
    chart: {
      dropShadow: {
        enabled: true,
        color: theme === "dark" ? bg : "#000",
        top: 4,
        left: 4,
        blur: 10,
        opacity: 0.5,
      },
      parentHeightOffset: 0,
      id: "basic-line",
      background: theme === "dark" ? "#222831" : bg,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors: theme === "dark" ? bg : "#fff",
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: data,
      },
    ],
  },
});
