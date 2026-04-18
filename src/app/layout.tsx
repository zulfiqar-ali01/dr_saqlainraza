import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Saqlain Raza Portfolio',
  description: 'Portfolio of Dr. Saqlain Raza, Assistant Professor specializing in Applied Statistics and Data Science.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}