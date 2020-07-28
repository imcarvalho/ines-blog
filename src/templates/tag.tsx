import React from 'react';
import { Link, graphql } from 'gatsby';
import { Heading, Box } from 'tamia';
import Layout from '../layouts/Layout';

type Data = {
  allMdx: {
    totalCount: number;
    edges: {
      node: {
        frontmatter: {
          title: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

export default function Tags(props: {
  location: Location;
  pageContext: { tag: string };
  data: Data;
}) {
  if (!props.data) {
    return null;
  }

  const { edges, totalCount } = props.data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${props.pageContext.tag}"`;

  return (
    <Layout location={props.location}>
      <Heading level={2}>{tagHeader}</Heading>
      <Box mt="l" mb="l">
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </Box>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
