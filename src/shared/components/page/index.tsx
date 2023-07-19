import { PageProps } from "./types.ts";
import { PageStyled } from "./page.styles.ts";

export const Page = ({ children, className }: PageProps) => {
  return <PageStyled children={children} className={className} />;
};
