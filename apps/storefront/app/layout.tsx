import { WelcomeToast } from "components/welcome-toast";
import { GeistSans } from "geist/font/sans";
import { baseUrl } from "lib/utils";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google"; // [ADDED]
import { ReactNode } from "react"; // [ADDED Suspense]
import { Toaster } from "sonner";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={cn("font-body", "anti-aliased", GeistSans.variable, inter.variable, plusJakartaSans.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-screen flex-col bg-surface text-on-surface selection:bg-primary/20">
        <main className="grow">
          {children}
          <Toaster closeButton />
          <WelcomeToast />
        </main>
      </body>
    </html>
  );
}
