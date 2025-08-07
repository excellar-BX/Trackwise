
import AuthProvider from "@/contexts/AuthContext";
import "./globals.css";
import { BackToTop } from "@/components";

export const metadata = {
  title: "TrackWise",
  description: "",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <BackToTop/>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
