import { withMuiTheme } from "@/styles/mui-theme/theme.tsx";
import { LoginPage } from "@/pages/auth/login";

export const App = withMuiTheme(() => {
  return <LoginPage />;
});
