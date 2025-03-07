import Header from "@/components/Common/Header/Header";
import "./globals.css";
import Footer from "@/components/Common/Footer/Footer";

export const metadata = {
  title: "Nur Alam",
  description: "Professor - Pabna University of Science and Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
