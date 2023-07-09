import { css, styled, Typography } from "@mui/material";
import { TextProps } from "./types.ts";

export const TextStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "bold",
})<TextProps>`
  &.MuiTypography-root {
    ${({ bold = false }) =>
      bold &&
      css`
        font-weight: bold;
      `}
  }
`;
