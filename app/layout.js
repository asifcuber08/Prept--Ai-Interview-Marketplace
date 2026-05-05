import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prept",
  description: "A marketplace for interview preparation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />

            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/7 py-12  mx-auto px-6 flex flex-wrap items-center justify-center text-stone-400">
              <div className="container mx-auto px-4 text-center">
                <div>
                  <p className="text-lg font-medium text-muted-foreground">
                    Made with ❤️ by{" "}
                    <a
                      href="https://portfolio-asif08.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-yellow-500 transition-colors"
                    >
                      Asif Shamim
                    </a>
                  </p>

                  <p className="text-xs text-muted-foreground mt-2">
                    © {new Date().getFullYear()} Prept. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
