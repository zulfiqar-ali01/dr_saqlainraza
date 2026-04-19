import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

/** Production canonical URL — used when `VERCEL_ENV=production` or for local prod builds. */
const CANONICAL_SITE = 'https://dr-saqlainraza.vercel.app';

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '');
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_ENV === 'production') return CANONICAL_SITE;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';
  return CANONICAL_SITE;
}

const siteUrl = resolveSiteUrl();

const profileSameAs = [
  'https://www.linkedin.com/search/results/all/?keywords=Saqlain%20Raza',
  'https://www.researchgate.net/search/publication?q=Saqlain+Raza',
  'https://scholar.google.com/citations?user=aDTbV9oAAAAJ&hl=en',
] as const;

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
  sameAs: [...profileSameAs],
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Dr. Saqlain Raza — Portfolio',
  description,
  url: siteUrl,
  inLanguage: 'en',
  publisher: { '@id': `${siteUrl}/#person` },
};

const jsonLdPersonWithId = {
  ...jsonLdPerson,
  '@id': `${siteUrl}/#person`,
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
  applicationName: 'Dr. Saqlain Raza',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Dr. Saqlain Raza',
    title: `${titleDefault} | Applied Statistics & Data Science`,
    description,
    images: [
      {
        url: '/profile.jpg',
        alt: 'Dr. Saqlain Raza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${titleDefault} | Applied Statistics & Data Science`,
    description,
    images: ['/profile.jpg'],
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
            __html: JSON.stringify([jsonLdPersonWithId, jsonLdWebsite]),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
