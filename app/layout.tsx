import "./globals.css";
import { Nunito } from "next/font/google";

import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import Provider from './hooks/Provider';

export const metadata = {
  title: "Realtor",
  description: "Realtor: unified place to find the best rentals in your area",
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
      <Provider>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal />
          <RentModal/>
          <Navbar currentUser={currentUser} />
          {children}
        </ClientOnly>
        </Provider>
      </body>
    </html>
  );
}
