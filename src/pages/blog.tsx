import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { SiteMetadata } from '../entities/SiteMetadata';
import { PostExcerpt } from '../entities/Post';
import { Location } from '../entities/Location';
import getIcon from '../utils/getIcon';

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
      <PageTitleStyle>Blog posts</PageTitleStyle>
      <ContainerStyle>
        <PostsStyle>
          {posts.map(({ node }) => {
            return (
              <li key={node.fields.slug}>
                {node.frontmatter.date}{' '}
                <Link to={`/blog${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </PostsStyle>
      </ContainerStyle>
    </Layout>
  );
}

const PageTitleStyle = styled.h3`
  text-align: center;
`;

const ContainerStyle = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const PostsStyle = styled.ul`
  list-style: none;
  width: 60%;
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        author
        social {
          label
          isExternal
          url
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
  }
`;
