export const site = {
  legalName: 'North American Technologies and AI Solutions Inc.',
  shortName: 'NATAIS',
  corporationNumber: '1818319-8',
  businessNumber: '792296444',
  incorporated: '2026-08-20',
  address: {
    street: '151 Alma Street',
    city: 'Oshawa',
    region: 'Ontario',
    postalCode: 'L1G 2C3',
    country: 'Canada',
  },
  phone: '+1 367-331-8178',
  phoneHref: '+13673318178',
  email: 'contact@natais.ca',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://natais.ca',
};

type ProductStatus = 'live' | 'founder';

export const products: {
  slug: string;
  name: string;
  colour: string;
  status: ProductStatus;
  url: string;
  label: string;
  metrics: { n: string; key: string }[];
}[] = [
  {
    slug: 'carpoolwork',
    name: 'CarpoolWork',
    colour: 'var(--teal)',
    status: 'live',
    url: 'https://carpoolwork.ca',
    label: 'carpoolwork.ca',
    metrics: [
      { n: '2026', key: 'since' },
      { n: 'FR / EN', key: 'bilingual' },
    ],
  },
  {
    slug: 'ecoles',
    name: 'Écoles Primaires Cameroun',
    colour: 'var(--coral)',
    status: 'live',
    url: 'https://www.ecoles-primaires-cameroun.com',
    label: 'ecoles-primaires-cameroun.com',
    metrics: [
      { n: '2 206', key: 'schools' },
      { n: '360', key: 'municipalities' },
    ],
  },
  {
    slug: 'franchir',
    name: 'Franchir',
    colour: 'var(--indigo)',
    status: 'live',
    url: 'https://franchir.app',
    label: 'franchir.app',
    metrics: [
      { n: 'FR', key: 'language' },
      { n: 'TCF · TEF', key: 'tests' },
    ],
  },
];
