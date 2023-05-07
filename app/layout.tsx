import "./globals.css";
import { Nunito } from "next/font/google";

import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";
import { ThemeProvider } from "./providers/ThemeContext";

export const metadata = {
  title: "Rentals",
  description: "Rentals: unified place to find the best rentals in your area",
};

const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
      {/*   <ThemeProvider> */}
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          {children}
        </ClientOnly>
      {/*   </ThemeProvider> */}
      </body>
    </html>
  );
}
