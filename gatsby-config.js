module.exports = {
  siteMetadata: {
    title: 'BnademOverFlow',
    author: 'BnademOverFlow',
    description: 'BnademOverFlow Official Website',
  },
  plugins: [
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
  ],
};
