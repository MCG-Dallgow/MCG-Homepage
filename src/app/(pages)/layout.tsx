import Wrapper from "~/components/wrapper";
import Path from "~/components/path";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Path />
      {children}
    </Wrapper>
  );
}
