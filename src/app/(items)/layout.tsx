import PostWrapper from "~/components/post_wrapper";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PostWrapper>{children}</PostWrapper>
  );
}
