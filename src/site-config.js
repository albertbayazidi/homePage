export const siteConfig = {
  author: 'Albert Bayazidi',
  title: 'Bayazidi.xyz',
  subtitle: 'subtitle',
  description: 'description',

  email: 'albert.bayazidi@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: '',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Linkedin',
      href: '',
      icon: 'i-simple-icons-linkedin',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      src_dark: '/favicon.black.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Om meg',
        href: '/blog', // BØR ENDREs
      },
      {
        text: 'Cv',
        href: '/Cv', // BØR ENDREs
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
    ],
  },
}

export default siteConfig
