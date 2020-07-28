import React from 'react';
import { Link, graphql } from 'gatsby';
import { Heading, Box } from 'tamia';
import Layout from '../layouts/Layout';

export default function TagsPage(props: {
  location: Location;
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
}) {
  if (!props.data) {
    return null;
  }

  return (
    <Layout location={props.location}>
      <Heading level={2}>Tags</Heading>
      <Box mt="l">
        <ul>
          {props.data.allMdx.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
