import { graphql } from 'gatsby';

export const query = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      author
      siteUrl
      social {
        label
        isExternal
        url
      }
    }
  }
`;
