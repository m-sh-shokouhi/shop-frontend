import "./globals.css";
import { Header } from "@/components"

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
