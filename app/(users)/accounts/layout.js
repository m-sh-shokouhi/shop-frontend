import { UserContextProvider } from "@/app/_context/UserContext";
import "../../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <UserContextProvider>
          <main>{children}</main>
        </UserContextProvider>
      </body>
    </html>
  );
}
