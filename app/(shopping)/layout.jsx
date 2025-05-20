import { Container } from "@mui/material";
import "../globals.css";
import { Header } from "@/components";
import { theme } from "@/components/theme/ThemeContext";
import { ThemeProvider } from "@mui/material/styles";
import { UserContextProvider } from "../_context/UserContext";
import { CartProvider } from "../_context/CartContext";
import { ErrorProvider } from "../_context/ErrorContext";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ErrorProvider>
          <UserContextProvider>
            <CartProvider>
              <ThemeProvider theme={theme}>
                <Header />
                <Container maxWidth="lg" sx={{ marginTop: "10px" }}>
                  {children}
                </Container>
              </ThemeProvider>
            </CartProvider>
          </UserContextProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}
