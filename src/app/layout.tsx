import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

const titleDefault = 'Dr. Saqlain Raza';
const titleTemplate = '%s | Dr. Saqlain Raza';
const description =
  'Dr. Saqlain Raza — Assistant Professor at Imam Abdulrahman bin Faisal University (IAU), KSA. PhD Applied Statistics (INP-Toulouse, France). GLM, biostatistics, epidemiology, causality, NLP, and turnkey industrial data science. English, French, Urdu, and Arabic.';

const keywords = [
  'Dr. Saqlain Raza',
  'Saqlain Raza',
  'applied statistics',
  'general linear models',
  'GLM',
  'biostatistics',
  'epidemiology',
  'causality',
  'data science',
  'machine learning',
  'NLP',
  'Imam Abdulrahman bin Faisal University',
  'IAU',
  'INP Toulouse',
  'assistant professor',
  'public health',
  'UNDP',
  'consulting statistician',
];

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Saqlain Raza',
  honorificPrefix: 'Dr.',
  jobTitle: 'Assistant Professor',
  worksFor: {
    '@type': 'Organization',
    name: 'Imam Abdulrahman bin Faisal University',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dammam',
      addressCountry: 'SA',
    },
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Institut National Polytechnique de Toulouse (INP-T)' },
    { '@type': 'CollegeOrUniversity', name: 'Université Paul Sabatier (Toulouse III)' },
    { '@type': 'CollegeOrUniversity', name: 'Bahauddin Zakariya University' },
  ],
  email: 'srrhussain@iau.edu.sa',
  telephone: '+966533475986',
  url: siteUrl,
  knowsAbout: [
    'Applied statistics',
    'General linear models',
    'Biostatistics',
    'Epidemiology',
    'Causal inference',
    'Data science',
    'Natural language processing',
  ],
  knowsLanguage: ['English', 'French', 'Urdu', 'Arabic'],
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dr. Saqlain Raza — Portfolio',
  description,
  url: siteUrl,
  inLanguage: 'en',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: titleTemplate,
  },
  description,
  keywords,
  authors: [{ name: 'Dr. Saqlain Raza', url: siteUrl }],
  creator: 'Dr. Saqlain Raza',
  publisher: 'Dr. Saqlain Raza',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Dr. Saqlain Raza',
    title: `${titleDefault} | Applied Statistics & Data Science`,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${titleDefault} | Applied Statistics & Data Science`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'WXTKqKpXA1a_Cwi2FQ51vzITixd8hRp6xCTF6lIFJOM',
  },
  category: 'science',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdPerson, jsonLdWebsite]),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
