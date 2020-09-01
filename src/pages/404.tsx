import React from 'react';
import { Box, Link } from 'tamia';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import { Location } from '../entities/Location';

export default function NotFoundPage(props: { location: Location }) {
  return (
    <Layout location={props.location}>
      <SEO title="404: Not Found" />
      <Box justifyContent="center">
        <h2>Not Found</h2>
        <p>RIP ⚰️</p>
        <p>
          <Link to="/">Go back to the homepage</Link>
        </p>
      </Box>
    </Layout>
  );
}
