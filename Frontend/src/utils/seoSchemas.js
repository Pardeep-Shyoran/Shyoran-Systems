/**
 * SEO Structured Data (JSON-LD) Schemas for Shyoran Systems
 * 
 * CRITICAL RULE:
 * Strictly factual data only. Never invent ratings, reviews, addresses, prices, certifications, or company details.
 */

const SITE_URL = 'https://shyoran.systems';
const LOGO_URL = `${SITE_URL}/favicon.svg`;
const OG_IMAGE_URL = `${SITE_URL}/images/og-preview.jpg`;
const FOUNDER_NAME = 'Pardeep Shyoran';
const FOUNDER_EMAIL = 'hello@pardeep-shyoran.me';

/**
 * 1. Organization & ProfessionalService Schema
 * Verified business facts: Independent software engineering practice operated by Pardeep Shyoran in Sirsa, Haryana, India.
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Shyoran Systems',
  alternateName: 'Shyoran Systems Software Engineering Studio',
  url: SITE_URL,
  logo: LOGO_URL,
  image: OG_IMAGE_URL,
  description:
    'Independent software engineering studio specializing in high-velocity MERN stack web applications and production AI/LLM system integrations.',
  founder: {
    '@type': 'Person',
    name: FOUNDER_NAME,
    jobTitle: 'Lead Systems Architect & Full-Stack Engineer',
    email: FOUNDER_EMAIL,
    sameAs: [
      'https://github.com/Pardeep-Shyoran',
      'https://www.linkedin.com/company/shyoran-systems'
    ]
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sirsa',
    addressRegion: 'Haryana',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://github.com/Pardeep-Shyoran',
    'https://www.linkedin.com/company/shyoran-systems'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: FOUNDER_EMAIL,
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi']
  }
});

/**
 * 2. WebSite Schema
 */
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Shyoran Systems',
  description:
    'Custom software built around your business goals: web apps, SaaS platforms, and AI integrations.',
  publisher: {
    '@id': `${SITE_URL}/#organization`
  },
  inLanguage: 'en-US'
});

/**
 * 3. WebPage Schema Helper
 */
export const getWebPageSchema = (url, name, description) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  url,
  name,
  description,
  isPartOf: {
    '@id': `${SITE_URL}/#website`
  },
  about: {
    '@id': `${SITE_URL}/#organization`
  },
  inLanguage: 'en-US'
});

/**
 * 4. Services Catalog Schema for /services
 * Only verified service pillars offered directly by the studio.
 */
export const getServicesSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Shyoran Systems Software Engineering Services',
  description: 'Full-stack software engineering, SaaS architecture, AI integration, and cloud backend services.',
  url: `${SITE_URL}/services`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Custom Web Application Development',
        description:
          'High-velocity full-stack web applications built with React 19, Node.js, and MongoDB / PostgreSQL. Engineered for responsive speed, data integrity, and intuitive user workflows.',
        provider: {
          '@id': `${SITE_URL}/#organization`
        },
        serviceType: 'Full-Stack Web Development'
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'SaaS Product Development (MVP to Scale)',
        description:
          'End-to-end multi-tenant SaaS architecture with Stripe subscription billing, webhook pipelines, role permissions, and founder telemetry.',
        provider: {
          '@id': `${SITE_URL}/#organization`
        },
        serviceType: 'SaaS Architecture & Development'
      }
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'AI Integration & Workflow Automation',
        description:
          'Retrieval-Augmented Generation (RAG) knowledge bases, sub-50ms vector search with MongoDB Atlas, semantic caching, and streaming endpoints.',
        provider: {
          '@id': `${SITE_URL}/#organization`
        },
        serviceType: 'Artificial Intelligence & LLM Integration'
      }
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'API Architecture & High-Throughput Backends',
        description:
          'High-throughput REST and WebSocket backends with compound indexing, Redis caching, and Docker containerization on cloud infrastructure.',
        provider: {
          '@id': `${SITE_URL}/#organization`
        },
        serviceType: 'Backend Engineering & API Design'
      }
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Production Architecture Retainers & SLA',
        description:
          'Direct senior engineer retainers for ongoing feature expansion, database optimization, security hardening, and performance monitoring.',
        provider: {
          '@id': `${SITE_URL}/#organization`
        },
        serviceType: 'Software Maintenance & Architecture Retainer'
      }
    }
  ]
});

/**
 * 5. Case Study Article Schema for /work/:projectId
 */
export const getCaseStudySchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: project.title,
  alternativeHeadline: project.subtitle,
  description: project.summary,
  url: `${SITE_URL}/work/${project.id}`,
  image: `${SITE_URL}${project.image}`,
  author: {
    '@type': 'Person',
    name: FOUNDER_NAME,
    jobTitle: 'Lead Systems Architect & Full-Stack Engineer',
    sameAs: 'https://github.com/Pardeep-Shyoran'
  },
  publisher: {
    '@id': `${SITE_URL}/#organization`
  },
  about: project.categoryLabel,
  inLanguage: 'en-US'
});
