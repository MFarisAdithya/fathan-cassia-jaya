import React from 'react';
import { Head } from 'vite-react-ssg';
import { SITE_INFO } from '../config/siteConfig';

export default function CommoditySeoHead({ commodity, lang = 'in' }) {
  if (!commodity) return null;

  const isEn = lang === 'en';
  const siteUrl = SITE_INFO.siteUrl || 'https://fathan-cassia-jaya.vercel.app';
  const canonicalUrl = `${siteUrl}/produk/${commodity.slug}`;
  const ogImageUrl = `${siteUrl}${commodity.image}`;

  const metaTitle = (commodity.metaTitle && commodity.metaTitle[lang]) || commodity.metaTitle?.in || `${commodity.name.in} | UD Fathan Cassia Jaya`;
  const metaDesc = (commodity.metaDescription && commodity.metaDescription[lang]) || commodity.metaDescription?.in || '';

  // Extract prices from grades for Schema.org Offer
  const prices = commodity.grades.map(g => parseInt(g.price.replace(/[^0-9]/g, ''), 10) || 0);
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);

  // 1. JSON-LD: Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'UD Fathan Cassia Jaya',
    alternateName: 'Fathan Cassia Jaya',
    url: siteUrl,
    logo: `${siteUrl}/images/brand_logo.jpg`,
    image: `${siteUrl}/images/about_warehouse_processing.jpg`,
    description: isEn
      ? 'Primary Indonesian spice supplier and trader specializing in authentic Kerinci cinnamon (Cassiavera), cloves, black pepper, and premium agricultural commodities.'
      : 'Supplier dan pedagang komoditas rempah nusantara terpercaya, spesialis kayu manis Kerinci (Cassiavera), cengkeh, lada, dan rempah pilihan.',
    telephone: '+6282374173430',
    email: SITE_INFO.placeholders.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. P. Tirtayasa, Campang Raya, Kec. Tanjungkarang Timur',
      addressLocality: 'Bandar Lampung',
      addressRegion: 'Lampung',
      postalCode: '35244',
      addressCountry: 'ID',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+62-823-7417-3430',
        contactType: 'sales',
        areaServed: ['ID', 'Worldwide'],
        availableLanguage: ['Indonesian', 'English'],
      },
    ],
  };

  // 2. JSON-LD: Product with AggregateOffer or Offer
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${canonicalUrl}#product`,
    name: commodity.name[lang] || commodity.name.in,
    description: metaDesc,
    image: ogImageUrl,
    brand: {
      '@type': 'Brand',
      name: 'UD Fathan Cassia Jaya',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: String(lowPrice),
      highPrice: String(highPrice),
      offerCount: commodity.grades.length,
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: canonicalUrl,
      seller: {
        '@type': 'Organization',
        name: 'UD Fathan Cassia Jaya',
      },
    },
  };

  // 3. JSON-LD: FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: commodity.faq.map((item) => ({
      '@type': 'Question',
      name: item.question[lang] || item.question.in,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[lang] || item.answer.in,
      },
    })),
  };

  return (
    <Head>
      {/* Primary HTML Meta Tags */}
      <html lang={isEn ? 'en' : 'id'} />
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical and Alternate Links */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="id" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="product" />
      <meta property="og:site_name" content="UD Fathan Cassia Jaya" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content={commodity.name[lang] || commodity.name.in} />
      <meta property="og:locale" content={isEn ? 'en_US' : 'id_ID'} />
      <meta property="og:locale:alternate" content={isEn ? 'id_ID' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={commodity.name[lang] || commodity.name.in} />

      {/* Structured Data: JSON-LD (Organization, Product, FAQPage) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Head>
  );
}
