import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { SiteMetadata } from '../entities/SiteMetadata';
import { PostExcerpt } from '../entities/Post';
import { Location } from '../entities/Location';

export default function Blog(props: {
  location: Location;
  data: {
    site: { siteMetadata: SiteMetadata };
    allMdx: { edges: { node: PostExcerpt }[] };
  };
}) {
  const posts = props.data.allMdx.edges;

  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <SEO title="Blog" />
      <PostContainerStyle>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostStyle key={node.fields.slug}>
              <h3>
                <Link to={`/blog${node.fields.slug}`}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </PostStyle>
          );
        })}
      </PostContainerStyle>
    </Layout>
  );
}

const PostContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const PostStyle = styled.div`
  width: 300px;
`;

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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
