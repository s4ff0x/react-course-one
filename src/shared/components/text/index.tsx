import { TextStyled } from "./text.styles.ts";
import { TextProps } from "./types.ts";

export const Text = (props: TextProps) => {
  return <TextStyled {...props} />;
};
