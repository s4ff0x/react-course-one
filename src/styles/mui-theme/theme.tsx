import { createContext, FC, useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "@/styles/mui-theme/get-design-tokens.ts";

export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

declare module "@mui/material/styles" {
  interface PaletteColor {
    gradient?: string;
  }
  interface SimplePaletteColorOptions {
    gradient?: string;
  }
}

export function withMuiTheme(Component: FC) {
  return function () {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    const toggleColorMode = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const theme = useMemo(() => {
      return createTheme(getDesignTokens(mode));
    }, [mode]);

    return (
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };
}
