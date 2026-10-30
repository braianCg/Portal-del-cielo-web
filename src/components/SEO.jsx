import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = () => {
  const title = "Portal del Cielo Salta | Iglesia Cristiana en Salta";
  const description = "Portal del Cielo Salta - Iglesia cristiana en Salta y Cerrillos. Un portal abierto hacia la presencia de Dios. Año de expansión, multiplicación y crecimiento.";
  const siteUrl = "https://portaldelcielosalta.com/";
  const imageUrl = "https://images.unsplash.com/photo-1601760562234-9814eea6db90?w=1200&h=630&q=80";

  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'Church',
      'name': 'Portal del Cielo Salta',
      'alternateName': 'Iglesia Portal del Cielo',
      'url': siteUrl,
      'logo': `${siteUrl}logo.png`,
      'image': imageUrl,
      'description': description,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Salta',
        'addressRegion': 'Salta',
        'addressCountry': 'AR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -24.7859,
        'longitude': -65.4117
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '10:00',
          'closes': '12:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '18:00',
          'closes': '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Wednesday',
          'opens': '20:00',
          'closes': '21:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '18:30',
          'closes': '20:30'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      'name': 'Reunión General de Domingo',
      'description': 'Alabanza colectiva, predicación de la palabra y manifestación de la presencia de Dios.',
      'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
      'eventStatus': 'https://schema.org/EventScheduled',
      'location': {
        '@type': 'Place',
        'name': 'Portal del Cielo Salta',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Salta',
          'addressRegion': 'Salta',
          'addressCountry': 'AR'
        }
      },
      'organizer': {
        '@type': 'Organization',
        'name': 'Portal del Cielo Salta',
        'url': siteUrl
      }
    }
  ];

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Portal del Cielo, Iglesia Salta, Iglesia Cristiana Salta, Oración, Ministerios, Invasión del Amor de Dios, Cerrillos, Fe Salta" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self';" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};
