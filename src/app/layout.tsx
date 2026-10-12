import type { Metadata } from "next";
import { Pixelify_Sans, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Scene } from "@/components/Scene";
import "./globals.css";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tona Otoro | Software Engineer",
  description:
    "Portfolio of Tona Otoro, a software engineer building Parkeye (500+ App Store downloads), UFCStyles, and Consil AI.",
};

// Applies the saved Options → Motion choice before first paint so animations
// don't flash on for visitors who turned them off.
const motionScript = `try{var m=localStorage.getItem("motion");if(m)document.documentElement.dataset.motion=m}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pixelify.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="min-h-full">
        <Scene />
        {children}
      </body>
    </html>
  );
}
