import { Inter } from "next/font/google";
// import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/assets/css/main.css";
import "../app/assets/css/dashboard.css";
import "../app/assets/css/about.css";
import "../app/assets/css/contact.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "esgledger",
  description: "Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
