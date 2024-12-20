"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterHandler() {
  const pathname = usePathname();

  // Paths where footer should not appear
  const noFooterPaths = ["/userStatus"];

  if (noFooterPaths.includes(pathname)) {
    return null; // Do not render Footer
  }

  return <Footer />;
}