import React from 'react';
import { Flex, Link } from 'tamia';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import { Location } from '../entities/Location';

export default function NotFoundPage(props: { location: Location }) {
  return (
    <Layout location={props.location}>
      <SEO title="404: Not Found" />
      <Flex flexDirection="column" alignItems="center" width={1}>
        <h2>Not Found</h2>
        <p>RIP ⚰️</p>
        <p>
          <Link to="/">Go back to the homepage</Link>
        </p>
      </Flex>
    </Layout>
  );
}
