import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Saqlain Raza Portfolio',
  description: 'Portfolio of Dr. Saqlain Raza, Assistant Professor specializing in Applied Statistics and Data Science.',
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}