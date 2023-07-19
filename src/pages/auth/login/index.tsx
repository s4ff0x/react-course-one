import { ThemeSwitcher } from "@/features/theme-switcher";
import { Text } from "@/shared/components/text";
import { Input } from "@/shared/components/input";
import { LoginInputsStyled, LoginPageStyled } from "./login.styles.ts";
import { Button } from "@/shared/components/button";

export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <ThemeSwitcher />
      <Text bold variant={"h5"} align={"center"}>
        memoshift
      </Text>
      <LoginInputsStyled>
        <Text bold variant={"h4"}>
          Hey, you
        </Text>
        <Text pale variant={"h4"} sx={{ mt: 1 }}>
          Just a few things...
        </Text>
        <Input
          variant={"standard"}
          fullWidth
          placeholder={"Email"}
          sx={{ mt: 1 }}
        />
        <Input
          variant={"standard"}
          fullWidth
          placeholder={"Password"}
          sx={{ mt: 1 }}
        />
      </LoginInputsStyled>
      <Button>Sign in</Button>
    </LoginPageStyled>
  );
};
