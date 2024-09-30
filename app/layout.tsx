import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grimo - Reimagine Word Processor",
  description: "Your All-in-one Writing Interface for Better Writing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      {/* <head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head> */}
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="py-20 md:py-32">{children}</div>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
