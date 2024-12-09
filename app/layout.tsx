import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });
import { CookieConsent } from "@/components/cookie-consent/cookie-consent";
// export const metadata: Metadata = {
//   title: "Grimo - Reimagine Word Processor",
//   description: "Your All-in-one Writing Interface for Better Writing",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://grimo.ai"),
  title: {
    template: "%s | Grimo",
    default: "Grimo - Reimagine Word Processor",
  },
  description: "Your All-in-one Writing Interface for Better Writing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="py-14 md:py-16">{children}</div>
          <FooterSection />
        </ThemeProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
