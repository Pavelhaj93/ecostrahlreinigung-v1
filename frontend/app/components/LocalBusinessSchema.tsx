export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Ecostrahlreinigung',
    'description':
      'Professionelle Reinigungslösungen - Laserreinigung, Sandstrahlen, Trockeneisreinigung',
    'image': 'https://ecostrahlreinigung.de/images/logo-triangle-yellow.png',
    '@id': 'https://ecostrahlreinigung.de',
    'url': 'https://ecostrahlreinigung.de',
    'telephone': '+49-XXX-XXXXXXX', // Add your phone number
    'priceRange': '€€',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Bayern',
      'addressCountry': 'DE',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 49.0, // Add your coordinates
      'longitude': 12.0,
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Cham',
      },
      {
        '@type': 'City',
        'name': 'Regensburg',
      },
      {
        '@type': 'City',
        'name': 'Straubing',
      },
      {
        '@type': 'City',
        'name': 'München',
      },
      {
        '@type': 'City',
        'name': 'Passau',
      },
      {
        '@type': 'City',
        'name': 'Nürnberg',
      },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Reinigungsdienstleistungen',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Laserreinigung',
            'description': 'Professionelle Laserreinigung für verschiedene Oberflächen',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Sandstrahlen',
            'description': 'Sandstrahlen für Oberflächenbehandlung',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Trockeneisreinigung',
            'description': 'Umweltfreundliche Trockeneisreinigung',
          },
        },
      ],
    },
    'sameAs': [
      // Add your social media profiles
      // 'https://www.facebook.com/ecostrahlreinigung',
      // 'https://www.instagram.com/ecostrahlreinigung',
      // 'https://www.linkedin.com/company/ecostrahlreinigung',
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
  )
}
