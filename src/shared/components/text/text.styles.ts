import { css, styled, Typography } from "@mui/material";
import { TextProps } from "./types.ts";

export const TextStyled = styled(Typography, {
  shouldForwardProp: (prop) => !["bold", "pale"].find((el) => el === prop),
})<TextProps>`
  &.MuiTypography-root {
    ${({ bold = false }) =>
      bold &&
      css`
        font-weight: bold;
      `}
    ${({ pale = false }) =>
      pale &&
      css`
        opacity: 0.3;
      `}
  }
`;
