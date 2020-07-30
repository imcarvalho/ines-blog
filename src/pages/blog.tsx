import React from 'react';
import { Link, graphql } from 'gatsby';
import { Heading, Text, Box, Flex, TextContainer } from 'tamia';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import { PostExcerpt } from '../entities/Post';
import { Location } from '../entities/Location';

export default function Blog(props: {
  location: Location;
  data: {
    posts: { edges: { node: PostExcerpt }[] };
  };
}) {
  if (!props.data) {
    return null;
  }

  return (
    <Layout location={props.location}>
      <SEO title="Blog" />
      <Heading level={3} textAlign="center">
        Posts
      </Heading>
      <Flex justifyContent="center">
        <TextContainer>
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
                    <Text textAlign="end">
                      <strong>Tags</strong>:{' '}
                      <Link to={`/tag/${node.frontmatter.tags}`}>
                        {node.frontmatter.tags}
                      </Link>
                    </Text>
                  </Box>
                </li>
              );
            })}
          </ul>
        </TextContainer>
      </Flex>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
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
            tags
          }
        }
      }
    }
  }
`;
