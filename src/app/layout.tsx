import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "./globals.css";

const monaspaceRadon = localFont({
  src: "./fonts/MonaspaceRadon.woff2",
  variable: "--font-monaspace-radon",
  weight: "100 900",
});

export const metadata: Metadata = {
  icons: ["logo.svg"],
  title: "Shawn求索之旅",
  description: "Shawn's odyssey of exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${monaspaceRadon.className} bg-background text-foreground antialiased`}
        >
          <Navbar />
          <Background />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
