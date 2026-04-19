import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "next-themes";
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });


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

const titleDefault = 'Dr. Saqlain Raza';
const titleTemplate = '%s | Dr. Saqlain Raza';
const description =
  'Dr. Saqlain Raza — Assistant Professor at Imam Abdulrahman bin Faisal University (IAU), KSA. PhD Applied Statistics from INP-Toulouse, France. Expert in biostatistics, epidemiology, data science, and health informatics with 15+ years of experience. Publications in peer-reviewed journals. English, French, and Urdu speaker.';

const keywords = [
  'Dr. Saqlain Raza',
  'Saqlain Raza',
  'applied statistics',
  'biostatistics',
  'epidemiology',
  'data science',
  'health informatics',
  'general linear models',
  'GLM',
  'machine learning',
  'NLP',
  'causal inference',
  'Imam Abdulrahman bin Faisal University',
  'IAU',
  'INP Toulouse',
  'assistant professor',
  'public health',
  'UNDP',
  'statistics PhD',
  'data scientist',
];

const profileSameAs = [
  'https://www.linkedin.com/in/saqlain-razaphd-645a11b',
  'https://www.researchgate.net/search/publication?q=Saqlain+Raza',
  'https://scholar.google.com/citations?user=aDTbV9oAAAAJ&hl=en',
];

// Person Schema - Comprehensive Professional Profile
const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Dr. Saqlain Raza',
  honorificPrefix: 'Dr.',
  givenName: 'Saqlain',
  familyName: 'Raza',
  jobTitle: 'Assistant Professor',
  email: 'srrhussain@iau.edu.sa',
  telephone: '+966533475986',
  url: siteUrl,
  image: {
    '@type': 'ImageObject',
    url: `${siteUrl}/profile.jpg`,
    width: 300,
    height: 300,
  },
  description: 'Applied statistician with PhD and 15+ years of experience in biostatistics, epidemiology, and health data science.',
  worksFor: {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Imam Abdulrahman bin Faisal University',
    url: 'https://www.iau.edu.sa',
    sameAs: [
      'https://en.wikipedia.org/wiki/Imam_Abdulrahman_bin_Faisal_University',
      'https://www.wikidata.org/wiki/Q5995382',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dammam',
      addressRegion: 'Eastern Province',
      addressCountry: 'SA',
    },
  },
  affiliation: [
    {
      '@type': 'Organization',
      name: 'COMSATS University, Islamabad',
      jobTitle: 'Assistant Professor',
      startDate: '2016-01-01',
      endDate: '2021-01-31',
    },
    {
      '@type': 'Organization',
      name: 'Pakistan Institute of Development Economics',
      jobTitle: 'Assistant Professor',
      startDate: '2014-04-01',
      endDate: '2015-12-31',
    },
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      '@id': 'https://www.inp-toulouse.fr',
      name: 'Institut National Polytechnique de Toulouse (INP-T)',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toulouse',
        addressCountry: 'FR',
      },
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Université Paul Sabatier Toulouse III',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toulouse',
        addressCountry: 'FR',
      },
    },
  ],
  educationDetails: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Degree',
      name: 'Doctor of Philosophy (Ph.D.) in Statistics',
      educationalLevel: 'Doctoral',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Institut National Polytechnique de Toulouse',
      },
      startDate: '2010-09-01',
      endDate: '2013-12-31',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Degree',
      name: 'Master of Public Health (MPH) in Epidemiology',
      educationalLevel: 'Master',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Université Paul Sabatier Toulouse III',
      },
      startDate: '2008-09-01',
      endDate: '2010-06-30',
    },
  ],
  knowsAbout: [
    'Applied Statistics',
    'Biostatistics',
    'Epidemiology',
    'Data Science',
    'General Linear Models',
    'Causal Inference',
    'Natural Language Processing',
    'Health Informatics',
    'Research Methodology',
    'Quantitative Research',
    'Qualitative Research',
    'Machine Learning',
    'Statistical Modeling',
  ],
  knowsLanguage: [
    {
      '@type': 'Language',
      name: 'English',
      alternateName: 'Full Professional',
    },
    {
      '@type': 'Language',
      name: 'French',
      alternateName: 'Professional Working',
    },
    {
      '@type': 'Language',
      name: 'Urdu',
      alternateName: 'Native or Bilingual',
    },
    {
      '@type': 'Language',
      name: 'Arabic',
    },
  ],
  sameAs: profileSameAs,
};

// Organization Schema
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Imam Abdulrahman bin Faisal University',
  url: 'https://www.iau.edu.sa',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dammam',
    addressCountry: 'SA',
  },
};

// Website Schema
const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Dr. Saqlain Raza — Professional Portfolio',
  description,
  url: siteUrl,
  inLanguage: 'en',
  isPartOf: {
    '@id': `${siteUrl}/#person`,
  },
  publisher: {
    '@id': `${siteUrl}/#person`,
  },
};

// BreadcrumbList Schema
const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Profile',
      item: `${siteUrl}/profile`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Publications',
      item: `${siteUrl}/publications`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Experience',
      item: `${siteUrl}/experience`,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: titleTemplate,
  },
  description,
  keywords,
  authors: [
    {
      name: 'Dr. Saqlain Raza',
      url: siteUrl,
    },
  ],
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
  applicationName: 'Dr. Saqlain Raza — Professional Portfolio',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Dr. Saqlain Raza',
    title: 'Dr. Saqlain Raza | Applied Statistics & Data Science Expert',
    description,
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Saqlain Raza — Assistant Professor at IAU',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Saqlain Raza | Applied Statistics & Data Science',
    description,
    creator: '@DrSaqlainRaza',
    images: {
      url: '/profile.jpg',
      alt: 'Dr. Saqlain Raza',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'WXTKqKpXA1a_Cwi2FQ51vzITixd8hRp6xCTF6lIFJOM',
  },
  category: 'science',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                jsonLdPerson,
                jsonLdOrganization,
                jsonLdWebsite,
                jsonLdBreadcrumb,
              ]),
            }}
          />
      </head>

      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}