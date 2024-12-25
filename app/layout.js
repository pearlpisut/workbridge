import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/ui/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HelpPool - connect helpers with projects",
  description: "HelpPool is a platform for connecting helpers with projects in Hong Kong.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>
          {children}
        </main>
        <div className="mt-8 mb-2 text-center text-sm text-gray-500">
          <p>&copy; 2024 HelpPool</p>
        </div>
      </body>
    </html>
  );
}
