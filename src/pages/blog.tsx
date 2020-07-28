import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Heading, Text, Box, Flex } from 'tamia';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import { SiteMetadata } from '../entities/SiteMetadata';
import { PostExcerpt, SidebarPosts } from '../entities/Post';
import { Location } from '../entities/Location';

export default function Blog(props: {
  location: Location;
  data: {
    site: { siteMetadata: SiteMetadata };
    posts: { edges: { node: PostExcerpt }[] };
    latestPosts: SidebarPosts;
  };
}) {
  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
      latestPosts={props.data.latestPosts}
    >
      <SEO title="Blog" />
      <Heading level={3} textAlign="center">
        Posts
      </Heading>
      <Container>
        <ul>
          {props.data.posts.edges.map(({ node }) => {
            return (
              <li key={node.fields.slug}>
                <Box mb="l">
                  <Flex justifyContent="space-between" mb="s">
                    <Link to={`/blog${node.fields.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                    <Text variant="strong">{node.frontmatter.date}</Text>
                  </Flex>
                  <Text>{node.excerpt}</Text>
                </Box>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadataFragment
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
          }
        }
      }
    }
    latestPosts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
