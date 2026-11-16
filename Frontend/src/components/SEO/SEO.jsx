import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Shyoran Systems';
const DEFAULT_DOMAIN = 'https://shyoran.systems';
const DEFAULT_OG_IMAGE = `${DEFAULT_DOMAIN}/images/og-preview.jpg`;
const DEFAULT_DESCRIPTION =
  'Custom software built around your business goals, from the first idea to a production-ready product. Specialized in MERN-stack web applications, SaaS platforms, and AI vector integrations.';

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = DEFAULT_DOMAIN,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = 'Shyoran Systems — High-Velocity Web & AI Engineering Studio',
  noindex = false,
  schema = null
}) => {
  // Ensure title contains brand suffix without redundancy
  const formattedTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  
  // Format canonical & image URLs as absolute URLs
  const absoluteCanonical = canonicalUrl.startsWith('http')
    ? canonicalUrl
    : `${DEFAULT_DOMAIN}${canonicalUrl.startsWith('/') ? '' : '/'}${canonicalUrl}`;

  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${DEFAULT_DOMAIN}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      {/* Primary Document Meta */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absoluteCanonical} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="Pardeep Shyoran" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteCanonical} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pardeepshyoran" />
      <meta name="twitter:creator" content="@pardeepshyoran" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  ogImageAlt: PropTypes.string,
  noindex: PropTypes.bool,
  schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default SEO;
