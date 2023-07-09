import { PaletteMode } from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: lightBlue,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            ...lightBlue,
            gradient: "linear-gradient(180deg, #181818, #030303)",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
