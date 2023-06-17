<template>
  <!-- Structured Data -->
  <component :is="'script'" type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CafeOrCoffeeShop",
          "name": "Inspire Coffee Company",
          "logo": "https://inspirebreda.nl/img/inspire-logo-orange-dark-brown.svg",
          "image": [
            "https://inspirebreda.nl/img/carousel-1.jpg",
            "https://inspirebreda.nl/img/carousel-2.jpg",
            "https://inspirebreda.nl/img/carousel-3.jpg",
            "https://inspirebreda.nl/img/carousel-4.jpg",
            "https://inspirebreda.nl/img/carousel-5.jpg",
            "https://inspirebreda.nl/img/carousel-6.jpg",
            "https://inspirebreda.nl/img/carousel-7.jpg",
            "https://inspirebreda.nl/img/carousel-8.jpg"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Veemarktstraat 4",
            "addressLocality": "Breda",
            "postalCode": "4811 ZE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.15517,
            "longitude": 5.38721
          },
          "url": "https://inspirebreda.nl",
          "sameAs": [
            "https://www.instagram.com/inspirebreda/",
            "https://www.facebook.com/inspirecoffeecompany/",
            "https://twitter.com/inspirecoffee"
          ],
          "telephone": "+31765153272",
          "email": "breda@inspirecoffee.com",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday"],
              "opens": "08:30",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Thursday", "Friday", "Saturday"],
              "opens": "08:30",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "18:00"
            }
          ],
          "hasMenu": [
            "https://inspirebreda.nl/menu/kaart-inspire-4-1.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-2.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-9.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-3.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-4.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-5.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-6.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-7.pdf",
            "https://inspirebreda.nl/menu/kaart-inspire-4-8.pdf"
          ]
        },
        {
          "@type": "SpecialAnnouncement",
          "name": "Gesloten wegens verbouwing.",
          "text": "Let op: i.v.m. de verbouwing van de begane grond zijn we 1 t/m 17 mei gesloten. Volg onze socials voor updates!",
          "datePosted": "2023-04-26T08:00",
          "expires": "2023-05-17T23:59",
          "announcementLocation": {
            "@type": "CafeOrCoffeeShop",
            "name": "Inspire Coffee Company",
            "image" : "https://inspirebreda.nl/img/banner-mobile.jpg",
            "url": "https://inspirebreda.nl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Veemarktstraat 4",
              "addressLocality": "Breda",
              "postalCode": "4811 ZE"
            },
            "telephone": "+31765153272"
          }
        }
      ]
    }
  </component>
</template>
