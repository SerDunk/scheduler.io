import type { Metadata } from "next";
import "./globals.css";
import { ubuntu } from "../../public/fonts";

export const metadata: Metadata = {
  title: "Scheduler",
  description: "Create optimal roadmaps to complete your work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
