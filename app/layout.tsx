import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Grimo - Reimagine Word Processor",
//   description: "Your All-in-one Writing Interface for Better Writing",
// };

export const metadata = {
  title: {
    template: "%s | Grimo",
    default: "Grimo - Reimagine Word Processor",
  },
  description: "Your All-in-one Writing Interface for Better Writing",
//   openGraph: {
//     type: "website",
//     url: "https://www.grimo.ai/",
//     title: "Grimo - Reimagine Word Processor",
//     description: "Your All-in-one Writing Interface for Better Writing",
//     images: [
//       {
//         // url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Grimo - Reimagine Word Processor",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "https://www.grimo.ai/",
//     title: "Grimo - Reimagine Word Processor",
//     description: "Your All-in-one Writing Interface for Better Writing",
//     images: [
//       "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
//     ],
//   },
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
