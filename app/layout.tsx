import React from 'react';
import '../styles/globals.css';
import Navbar from './Components/Navbar';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <body className="backgroundGray">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
