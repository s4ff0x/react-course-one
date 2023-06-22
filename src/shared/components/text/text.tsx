import { TypographyProps } from "@mui/material";
import { TextStyled } from "./text.styles.ts";

export type TextProps = TypographyProps & {
  bold: boolean;
};
export const Text = (props: TextProps) => {
  return <TextStyled {...props} />;
};
