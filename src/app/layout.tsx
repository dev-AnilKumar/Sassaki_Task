
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sasaaki Task",
  description: "Created for assignment purpose by Anil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-[100dvh] flex">
          <Sidebar />
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
