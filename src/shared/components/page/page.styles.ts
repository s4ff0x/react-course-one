import { styled } from "@mui/material";
import { PageProps } from "./types.ts";

export const PageStyled = styled("div")<PageProps>`
  padding: 1rem;
  height: 100vh;
  background: ${({ theme: { palette } }) =>
    palette.mode === "dark"
      ? palette.background.pageGradient
      : palette.background.default};
`;
