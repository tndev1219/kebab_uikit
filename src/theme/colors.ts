import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E46149",
  primaryBright: "#FAE0DC",
  primaryDark: "#EC9383",
  secondary: "#F7931A",
  success: "#11A373",
  warning: "#FFB237",
  info: "#197BBD",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#F7D0C9",
  tertiary: "#FFFFFF",
  text: "#23001E",
  textDsc: "#F7D0C9",
  textDisabled: "#BDC2C4",
  textInactive: "#BDC2C4",
  textSubtle: "#404040",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  cardBackground1: "#E46149",
  cardBackground2: "#EDF1F3",
  footer: "#E46149",
  menuHover: "#EEEEEE",
  divider: "#EEEEEE",
  switchButton: "#E46149",
  switchButtonBackground: "#FAE0DC",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#1F1D2B",
  backgroundDisabled: "#92939B",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#2F3142",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDsc: "#F7D0C9",
  textDisabled: "#FFFFFF",
  textInactive: "#92939B",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#252836",
  cardBackground1: "#252836",
  cardBackground2: "#252836",
  footer: "#FFFFFF",
  menuHover: "#353547",
  divider: "#323542",
  switchButton: "#FFFFFF",
  switchButtonBackground: "#2F3142",
};