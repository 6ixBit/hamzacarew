import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamza Carew",
  description: "Hamza's personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme radius="large" scaling="95%">
          <main className="flex min-h-screen flex-col items-center pt-2 px-4 max-w-3/4 mx-auto bg-slate-300 gap-4">
            <Header />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
