import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { personal } from "@/data";

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title}`,
  description: personal.bioShort,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Pakistan",
    "Komal Raza",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.bioShort,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
