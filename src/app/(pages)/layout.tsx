import Wrapper from "~/components/wrapper";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
