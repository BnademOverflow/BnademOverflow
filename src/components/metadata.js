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
    </Helmet>
  );
};

export default Metadata;
