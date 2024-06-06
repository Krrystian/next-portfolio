import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import StoreProvider from "./providers/Provider";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krystian Cichorz",
  description: "NextJS portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={lato.className}>
        <StoreProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
