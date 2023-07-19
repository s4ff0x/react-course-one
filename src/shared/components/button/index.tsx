import { ButtonProps } from "./types.ts";
import { ButtonStyled } from "./button.styles.ts";

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};
