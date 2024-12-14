import BacktoTop from "@/components/layout/BacktoTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import { MetaData } from "@/constants";
import { cn } from "@/utils";
import { Metadata } from "next";
import { Anton, Saira_Condensed, Birthstone, Crimson_Text } from "next/font/google";
import type { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const sairaCondensed = Saira_Condensed({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-saira-condensed",
  display: "swap",
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

// const barlow = Barlow({
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-barlow",
//   display: "swap",
// });

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimsonText",
  display: "swap",
});

const birthstone = Birthstone({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-birthstone",
  display: "swap",
});

export const metadata: Metadata = MetaData;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col min-h-screen",
          anton.variable,
          sairaCondensed.variable,
          crimsonText.variable,
          birthstone.variable
        )}
      >
        <BacktoTop />
        <Header />
        <main className="flex-grow flex flex-col min-h-[600px]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
