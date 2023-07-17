import { InputProps } from "./types.ts";
import { InputStyled } from "./input.styles.ts";

export const Input = (props: InputProps) => {
  return <InputStyled {...props} />;
};
