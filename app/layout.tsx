import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const ubuntu_init = Open_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  variable: "--font-Open_Sans",
})

export const metadata: Metadata = {
  title: "Rumi",
  description: "Rumi Learning Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={cn(
            "min-h-screen bg-background font-Open_Sans antialiased",
            ubuntu_init.variable
        )}
    >
    {children}
    </body>
    </html>
  );
}
