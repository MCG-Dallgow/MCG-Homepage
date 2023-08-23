import Header from "../components/header";

// These styles apply to every route in the application
import "../styles/globals.css";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
