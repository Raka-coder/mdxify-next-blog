import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/context/ThemeContext";
import SEO from "@/components/SEO";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mdxify Blog",
  description: "Mdxify Blog using Next.js 15 App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SEO
        title={metadata.title as string}
        description={metadata.description as string}
      />
      <body
        className={`${inter.variable} antialiased dark:bg-gray-950/95 dark:text-white dark:border-gray-700 dark:shadow-md dark:shadow-gray-700/50 dark:transition dark: transition-all duration-300 ease-in-out`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="top-right" richColors expand={false} theme="dark" />
      </body>
    </html>
  );
}
