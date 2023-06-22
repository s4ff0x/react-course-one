import { css, styled, Typography } from "@mui/material";
import { TextProps } from "./text.tsx";

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
