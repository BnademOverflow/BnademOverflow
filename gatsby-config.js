module.exports = {
  siteMetadata: {
    title: 'BnademOverFlow',
    author: 'BnademOverFlow',
    description: 'BnademOverFlow Official Website',
    titleTemplate: 'BnademOverFlow',
    url: 'https://bnademoverflow.com/', // No trailing slash allowed!
    image: 'src/images/icon.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@BnademOverFlow',
  },
  plugins: [
    `gatsby-plugin-preact`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BnademOverFlow',
        short_name: 'Website',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
