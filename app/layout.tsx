import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./responsive.css"
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dough",
  description: "Baking Happiness, One Cookie at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-bgBeige m-0 ${poppins.className}` }>
        {children}
        <Footer />
      </body>
    </html>
  );
}
