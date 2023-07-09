import { Text } from "@/shared/components/text";
import { Page } from "@/shared/components/page";
import { ThemeSwitcher } from "@/features/theme-switcher";
import { withMuiTheme } from "@/styles/mui-theme/theme.tsx";

export const App = withMuiTheme(() => {
  return (
    <Page>
      <ThemeSwitcher />
      <Text bold variant={"h5"} sx={{ mt: 10 }} align={"center"}>
        memoshift
      </Text>
    </Page>
  );
});
