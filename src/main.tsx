import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app.tsx";
import "@/styles/index.scss";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
