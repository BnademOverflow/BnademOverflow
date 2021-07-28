import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Metadata = ({ title, description, image }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
          }
        }
      }
    `
  );
  const metaTitle = title || data.site.siteMetadata.title;
  const metaDescription = description || data.site.siteMetadata.description;
  const metaImage = image || data.site.siteMetadata.image;
  return (
    <Helmet>
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="image" content={metaImage} />
      <meta property="og:url" content="http://bnademoverflow.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="BnademOverFlow" />
      <meta
        property="og:description"
        content="Community with genius people who love to be beside the computer and understand how its works."
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/BnademOverflow/BnademOverflow-Community/main/assets/background.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="BnademOverFlow" />
      <meta
        name="twitter:description"
        content="Community with genius people who love to be beside the computer and understand how its works."
      />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/BnademOverflow/BnademOverflow-Community/main/assets/background.png"
      />
    </Helmet>
  );
};

export default Metadata;
