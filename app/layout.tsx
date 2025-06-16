import "@/styles/globals.css";
import { SessionProvider } from "@/context/SessionContext";
import React, { ReactNode } from "react";

export const metadata = {
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
            
      <body className="flex justify-center items-center h-screen bg-gray-400">
          <SessionProvider>
            {children}
          </SessionProvider>
      </body>
    </html>
  );
}