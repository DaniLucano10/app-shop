import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/font";



export const metadata: Metadata = {
  title: "Teslo | shop",
  description: "Tienda de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
