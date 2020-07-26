import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Location } from '../entities/Location';
import { SiteMetadata } from '../entities/SiteMetadata';

export default function NotFoundPage(props: {
  location: Location;
  data: { site: { siteMetadata: SiteMetadata } };
}) {
  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        author
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`;