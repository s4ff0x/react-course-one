import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "@/styles/mui-theme/theme.tsx";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeSwitcherStyled } from "./theme-switcher.styles.ts";
export const ThemeSwitcher = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <ThemeSwitcherStyled>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </ThemeSwitcherStyled>
  );
};
