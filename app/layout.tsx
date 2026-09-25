import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/mainNavbar/Navbar";
import Footer from "./Components/footer/Footer";
import { PlanProvider } from "./contex/librayContext";
import { Toaster } from "react-hot-toast";
import { Oswald } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitlog",
  description: "Your gym companion",
};

const oswald = Oswald({
  subsets: ['latin'],  
  variable: '--font-oswald',  
  weight: ['400', '500', '700'],  
  display: 'swap',  
});
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PlanProvider>
         

        <Navbar/>
        {children}
        <Footer/>
         <Toaster 
                position="top-right"
                toastOptions={{
                    // Default styles for all toasts
                    style: {
                        background: '#111827',
                        color: '#fff',
                        border: '1px solid #1f2937',
                        fontSize: '14px',
                        fontWeight: '500',
                    },
                    // Your custom success styles
                    success: {
                        style: {
                            border: '1px solid #d4ff00',
                            padding: '16px',
                            color: '#d4ff00', 
                            background: '#0A0A0A', 
                        },
                        iconTheme: {
                            primary: '#d4ff00',
                            secondary: '#000',
                        },
                    },
                }}
            />
        </PlanProvider>
        </body>
    </html>
  );
}
