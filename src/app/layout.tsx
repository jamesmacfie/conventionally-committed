import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conventionally Committed",
  description:
    "Tells you if a commit message is valid or not, as per the Conventional Commits spec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
