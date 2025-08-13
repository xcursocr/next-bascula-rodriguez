import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import { Delius } from "next/font/google";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";

const delius = Delius({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Basculas Rodriguez",
  description: "Ventas de basculas y balanzas",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="es" suppressHydrationWarning className={delius.className}>
        <body>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
