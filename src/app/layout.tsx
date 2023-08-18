export const metadata = {
  title: "MCG Dallgow",
  description: "Die Homepage des Marie-Curie-Gymnasiums Dallgow-Döberitz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
