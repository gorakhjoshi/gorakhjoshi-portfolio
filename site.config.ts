export const tags = [
  'finance',
  'hiring',
  'career',
  'software',
  'design',
  'interview',
  'speaking',
  'design-system',
  'accessibility',
  'state-machine',
  'react',
  'jest',
  'testing',
  'component',
  'open-source',
  'tips',
  'github-actions',
  'ci',
];

const shared = {
  name: 'Gorakh Raj Joshi',
  // repo: 'https://github.com/segunadebayo/gorakhjoshi.com',
  // editUrl: 'https://github.com/segunadebayo/gorakhjoshi.com/edit/main/data/',
  website: 'https://gorakhjoshi.com',
  title: 'Gorakh Raj Joshi - Senior Fullstack Engineer',
  description:
    'Senior Fullstack Engineer: Specializing in System Design and Architecture, Accessibility, and Frontend Interface Design',
  image: 'https://gorakhjoshi.com/static/images/gorakh-raj-joshi.jpeg',
};

const siteConfig = {
  name: shared.name,
  image: shared.image,
  type: 'website',
  title: shared.title,
  titleTemplate: '%s - Gorakh Raj Joshi',
  description: shared.description,
  siteUrl: shared.website,
  profiles: {
    github: 'https://github.com/gorakhjoshi',
    twitter: 'https://twitter.com/thesegunadebayo',
    linkedin: 'https://www.linkedin.com/in/gorakhjoshi',
    email: 'mailto:mail@gorakhjoshi.com',
    resume: 'https://resume.gorakhjoshi.com/',
  },
  repo: {
    // url: shared.repo,
    // editUrl: shared.editUrl,
  },
  // twitter: {
  //   handle: '@thesegunadebayo',
  //   site: '@thesegunadebayo',
  //   cardType: 'summary_large_image',
  // },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: shared.website,
    title: shared.title,
    site_name: shared.name,
    description: shared.description,
    images: [
      {
        url: 'https://gorakhjoshi.com/static/images/gorakh-raj-joshi.jpeg',
        width: 1200,
        height: 630,
        alt: 'Senior Fullstack Engineer: Specializing in System Design and Architecture, Accessibility, and Frontend Interface Design',
      },
    ],
  },
};

export default siteConfig;
