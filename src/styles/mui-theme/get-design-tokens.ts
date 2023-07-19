import { PaletteMode } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: blue,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: "#fff",
            pageGradient: "#fff",
            buttonGradient:
              "linear-gradient(98.17deg, rgb(14, 110, 165) 4.77%, rgb(104, 199, 252) 92.17%)",
          },
        }
      : {
          primary: blue,
          background: {
            default: "#181818",
            pageGradient: "linear-gradient(180deg, #181818, #030303)",
            buttonGradient:
              "linear-gradient(98.17deg, rgb(14, 110, 165) 4.77%, rgb(104, 199, 252) 92.17%)",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
