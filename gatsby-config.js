const { oneLine, stripIndent } = require('common-tags')

const description = oneLine`
  StaticGen is a leaderboard of the top open source static site generators. Promoting a static
  approach to building websites.
`

module.exports = {
  siteMetadata: {
    url: 'https://staticwebsitehosting.com',
    title: `Static Website Hosting`,
    description: oneLine`
      Kick off your next, great Gatsby project with this default starter. This barebones starter
      ships with the main Gatsby configuration files you might need.
    `,
    author: `@cosmicjs`,
    image: 'https://staticgen.com/images/staticgen.png',
    repo: 'https://github.com/cosmicjs/staticwebsitehosting.org',
    homeTitle: 'Static Website Hosts | Top Static Website Hosting',
    subtitle: 'A List of Static Website Hosts for Jamstack Sites',
    description,
    socialPreviewImageFilename: 'staticgen.png',
    shareButtons: ['twitter', 'reddit'],
    shareText: 'Check out Static Website Hosting, a leaderboard of top static website hosts.',
    shareTextProjectStart: 'Check out ',
    shareTextProjectEnd: ', a static website host on the staticwebsitehosting.org leaderboard.',
    footerMarkdown: oneLine`
      Static Website Hosting is hosted and maintained by [Cosmic](https://www.cosmicjs.com), the perfect way to
      manage content for your [Jamstack sites and apps](https://jamstack.org).
    `,
    copyrightName: 'Cosmic JS Inc.',
    promoMarkdown: stripIndent`
      ## Need to connect a CMS for your Jamstack website?

      For generators with the "Install on Cosmic" button, you can install a new site from a template
      with one click and connect to your favorite static website hosting provider. Add your content team, set up webhooks for automattic content updates, and more.
    `,
    navLinks: [
      { url: 'https://jamstack.org', text: 'About Jamstack' },
      { url: 'https://staticgen.com', text: 'Need a Static Site Generator?' },
      { url: 'https://cosmicjs.com', text: 'Need a Static Site CMS?' },
    ],
    fallbackSortField: 'title',
    sorts: [
      { field: 'stars', label: 'Stars (7 days)', reverse: true, days: 7 },
      { field: 'stars', label: 'Stars (30 days)', reverse: true, days: 30 },
      { field: 'stars', label: 'Stars (total)', reverse: true },
      {
        field: 'followers',
        label: 'Followers (7 days)',
        reverse: true,
        days: 7,
      },
      {
        field: 'followers',
        label: 'Followers (30 days)',
        reverse: true,
        days: 30,
      },
      { field: 'followers', label: 'Followers (total)', reverse: true },
      { field: 'title', label: 'Title' },
    ],
    filters: [
      { field: 'language', emptyLabel: 'Any Language', multiple: true },
      { field: 'templates', emptyLabel: 'Any Template', multiple: true },
      { field: 'license', emptyLabel: 'Any License', multiple: true },
    ],
    fields: [
      { name: 'language', label: 'Languages' },
      { name: 'templates', label: 'Templates' },
      { name: 'license', label: 'License' },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
