import { Button, styled } from "@mui/material";

export const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    background: ${({ theme: { palette } }) =>
      palette.mode === "dark"
        ? palette.background.buttonGradient
        : palette.primary.main};
    min-width: 200px;
    padding: 0.8rem 0;
    color: ${({ theme: { palette } }) =>
      palette.mode === "dark" ? palette.grey[900] : palette.grey[50]};
    font-weight: bold;
    font-size: 1rem;
    border-radius: 1.9rem;
  }
`;
