import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Car Rent",
  description: "Syed Faizan Mustafa",
};
const Header = () => {
  return (
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </head>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
