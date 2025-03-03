import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";
import VisibleWrapper from "@/components/VisibleWrapper";
import { ToastContainer, Bounce } from 'react-toastify';
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"Mercado Tech",
  description: "Ecommerce de Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>

            <VisibleWrapper>
              <Navbar />
            </VisibleWrapper>
            <div className="min-h-screen">
              {children}
            </div>
            <VisibleWrapper>
              <Footer />
            </VisibleWrapper>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              limit={1}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover
              theme="light"
              transition={Bounce} />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
