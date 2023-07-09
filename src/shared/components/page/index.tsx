import { PageStyled } from "@/shared/components/page/page.styles.ts";
import { PageProps } from "./types.ts";

export const Page = ({ children }: PageProps) => {
  return <PageStyled children={children} />;
};
