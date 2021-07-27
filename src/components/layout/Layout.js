import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Community with genius people who love to be beside the computer and understand how its works.',
            },
            {
              name: 'keywords',
              content: 'ReactJS, Gatsby, BnademOverFlow',
            },
            { name: 'author', content: 'BnademOverFlow' },
            {
              name: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'og:description',
              content:
                'Community with genius people who love to be beside the computer and understand how its works.',
            },
            { name: 'og:url', content: 'https://bnademoverflow.com/' },
            {
              name: 'og:image',
              content:
                'https://raw.githubusercontent.com/BnademOverflow/BnademOverflow-Community/main/assets/background.png',
            },
            { name: 'og:type', content: 'website' },
            {
              name: 'og:site_name',
              content: 'BnademOverFlow',
            },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@BnademOverFlow' },
            {
              name: 'twitter:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'twitter:description',
              content:
                'Community with genius people who love to be beside the computer and understand how its works.',
            },
            {
              name: 'twitter:image',
              content:
                'https://raw.githubusercontent.com/BnademOverflow/BnademOverflow-Community/main/assets/background.png',
            },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@BnademOverFlow' },
            { name: 'twitter:creator', content: '@BnademOverFlow' },
            { name: 'twitter:domain', content: 'https://bnademoverflow.com/' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <>
          <Header />
          <main className="text-gray-900">{children}</main>
          <Footer />
        </>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
