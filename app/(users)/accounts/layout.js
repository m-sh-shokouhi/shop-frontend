import "../../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
