import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "./globals.css";

const hytmr = localFont({
  src: [
    {
      path: "/fonts/HYTangMeiRen45W.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/HYTangMeiRen55W.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/HYTangMeiRen75W.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/HYTangMeiRen95W.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-hytmr",
  weight: "400 500 700 900",
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
          className={`${hytmr.className} bg-background text-foreground antialiased font`}
        >
          <Navbar />
          <Background />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
