import type { Metadata } from "next";
import { memo } from "react";
import "./normalize.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import ThemeProvider from "@/providers/themeProvider";
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
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
});
export default Layout;
