import React from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <body className="backgroundDarkGray flex items-center justify-center h-screen">
        {children}
      </body>
    </html>
  );
}
