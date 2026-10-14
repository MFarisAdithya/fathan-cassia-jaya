import React from 'react';
import { Head } from 'vite-react-ssg';
import { SITE_INFO, PRODUCTS, TRANSLATIONS } from '../config/siteConfig';

export default function SeoHead({ lang = 'in', path = '/id' }) {
  const isEn = lang === 'en';
  const siteUrl = SITE_INFO.siteUrl || 'https://fathan-cassia-jaya.vercel.app';
  const canonicalUrl = `${siteUrl}${path}`;
  const ogImageUrl = `${siteUrl}/images/about_warehouse_processing.jpg`;

  const metaTitle = isEn
    ? 'UD Fathan Cassia Jaya | Indonesian Cinnamon & Wholesale Spices B2B Supplier'
    : 'UD Fathan Cassia Jaya | Supplier Kayu Manis Kerinci & Rempah Nusantara B2B';

  const metaDesc = isEn
    ? 'Direct supplier of authentic Kerinci cinnamon (cassiavera), cloves, nutmeg, black pepper, and premium Indonesian spices for industrial food manufacturers and global B2B buyers.'
    : 'Supplier tangan pertama kayu manis Kerinci (Cassiavera), cengkeh, lada hitam, kapulaga, pala, dan aneka rempah nusantara berkualitas untuk kebutuhan industri makanan, farmasi herbal, dan ekspor.';

  const t = TRANSLATIONS[lang] || TRANSLATIONS.in;
  const faqItems = (t.faq && t.faq.items) || [];
  const productList = (t.products && t.products.list) || PRODUCTS;

  // 1. JSON-LD: Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'UD Fathan Cassia Jaya',
    alternateName: 'Fathan Cassia Jaya',
    url: siteUrl,
    logo: `${siteUrl}/images/brand_logo.jpg`,
    image: ogImageUrl,
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

  // 2. JSON-LD: FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // 3. JSON-LD: Product (as ItemList of Product)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${canonicalUrl}#products`,
    name: isEn ? 'UD Fathan Cassia Jaya Spice Catalog' : 'Katalog Komoditas Rempah UD Fathan Cassia Jaya',
    numberOfItems: productList.length,
    itemListElement: productList.map((product, index) => {
      const cleanPrice = product.price ? product.price.replace(/[^0-9]/g, '') : '0';
      const cleanImg = product.image ? product.image.replace(/^\.\//, '/') : '';
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          '@id': `${siteUrl}/#product-${product.id}`,
          name: product.name,
          description: product.description || `${product.name} komoditas rempah UD Fathan Cassia Jaya`,
          image: cleanImg ? `${siteUrl}${cleanImg}` : ogImageUrl,
          brand: {
            '@type': 'Brand',
            name: 'UD Fathan Cassia Jaya',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'IDR',
            price: cleanPrice || '0',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            url: `${canonicalUrl}#produk`,
            seller: {
              '@type': 'Organization',
              name: 'UD Fathan Cassia Jaya',
            },
          },
        },
      };
    }),
  };

  return (
    <Head>
      {/* Primary HTML Meta Tags */}
      <html lang={isEn ? 'en' : 'id'} />
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical and Hreflang Tags */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="id" href={`${siteUrl}/id`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/id`} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="UD Fathan Cassia Jaya" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Gudang Operasional Rempah UD Fathan Cassia Jaya" />
      <meta property="og:locale" content={isEn ? 'en_US' : 'id_ID'} />
      <meta property="og:locale:alternate" content={isEn ? 'id_ID' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content="UD Fathan Cassia Jaya" />

      {/* Structured Data: JSON-LD (Organization, FAQPage, Product ItemList) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Head>
  );
}
