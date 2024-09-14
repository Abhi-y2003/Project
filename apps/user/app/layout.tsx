import { AppbarClient } from "../components/AppbarClient";
import "./globals.css";
import { Provider } from "./provider";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Provider>
          <AppbarClient/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
