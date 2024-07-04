const descriptionMd = `Consuelo Water Refilling Station`

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, '$1')
  .replace(/\n/g, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

module.exports = {
  title: 'Consuelo Water Refilling Station',
  descriptionMd: 'PWA Consuelo Water Refilling Station',
  description: 'Progressive Web App Consuelo Water Refilling Station',
  url: 'https://consuelo-water.vercel.app',
  twitterUsername: '@rpfprogrammer',
  email: 'rpf.programmer@gmail.com',
  socials: {
    GitHub: 'https://github.com/ronnelpf/consuelo',
    Twitter: 'https://www.facebook.com/Consuelo',
  },
  bgColor: '#1A202C',
  themeColor: '#3182ce',
}
