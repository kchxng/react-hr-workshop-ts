// for Dashboard
export const ColorsAdmin = {
  // primary: "#aa00ff",
  /////LSX Color ////////
  primary: "#DC143C",
  /////end lsx color////
  primary_light: "#e254ff",
  primary_dark: "#7200ca",
  secondary: "#448aff",
  secondary_light: "#83b9ff",
  secondary_dark: "#005ecb",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  /////////////////
  ////LSX Color////
  ////////////////
  red_lsx: "#DC143C",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
  bitcoin: "#ffb721",
  ethereum: "#14f1c1",
  ripple: "#336efc",
  blackcoin: "#d4a552",
};

export const palette = {
  primary: {
    main: ColorsAdmin.primary,
    dark: ColorsAdmin.primary_dark,
  },
  secondary: {
    main: ColorsAdmin.secondary,
  },
};

const appTheme: any = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
  shape: {
    searchbar: {
      borderRadius: 50,
    },
  },
};

export default appTheme;
