import type { Metadata } from "next";
import { memo } from "react";
import "./normalize.css";
import "./globals.css";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brisa Díaz | Full-Stack Developer",
  description:
    "I'm a passionate Information Systems Engineering student, driven by a curiosity to explore cutting-edge technologies and create impactful software solutions.",
};

const Layout = memo(function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextCookies = cookies();

  const colorMode =
    (nextCookies.get("theme")?.value as undefined | "light" | "dark") || "dark";

  return (
    <html lang="en" data-theme={colorMode}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header colorMode={colorMode} />
          {children}
          <Footer />
        </body>
      </>
    </html>
  );
});
export default Layout;
