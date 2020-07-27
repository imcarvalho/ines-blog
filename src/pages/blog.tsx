import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Heading } from 'tamia';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import { SiteMetadata } from '../entities/SiteMetadata';
import { PostExcerpt, SidebarPost } from '../entities/Post';
import { Location } from '../entities/Location';

export default function Blog(props: {
  location: Location;
  data: {
    site: { siteMetadata: SiteMetadata };
    posts: { edges: { node: PostExcerpt }[] };
    latestPosts: SidebarPost;
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
        Blog posts
      </Heading>
      <Container>
        <ul>
          {props.data.posts.edges.map(({ node }) => {
            return (
              <li key={node.fields.slug}>
                {node.frontmatter.date}{' '}
                <Link to={`/blog${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
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
    posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
