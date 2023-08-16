import Navbar from "@/components/Navbar";
import "../styles/globals.scss";

export const metadata = {
  title: "Thomas Allen",
  description: "Thomas Allen's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
