import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
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
      ...SiteMetadataFragment
    }
  }
`;
