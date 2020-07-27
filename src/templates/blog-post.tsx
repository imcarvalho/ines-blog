import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import PreviousNextPosts from '../components/PreviousNextPosts';
import { Post, PostExcerpt } from '../entities/Post';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';
import { Dimensions } from '../entities/enums';

export default function BlogPostTemplate(props: {
  location: Location;
  data: { mdx: Post; site: { siteMetadata: SiteMetadata } };
  pageContext: { previous: PostExcerpt; next: PostExcerpt };
}) {
  if (!props.data) {
    return null;
  }

  const post = props.data.mdx;

  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <PostHeaderStyled>
        <TitleStyled>{post.frontmatter.title}</TitleStyled>
        <strong>{post.frontmatter.date}</strong>
      </PostHeaderStyled>
      <MDXRenderer>{post.body}</MDXRenderer>
      <PreviousNextPosts posts={props.pageContext} />
    </Layout>
  );
}

const PostHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${Dimensions.SpacingM};
`;

const TitleStyled = styled.h3`
  margin: 0;
  font-size: 32px;
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      ...SiteMetadataFragment
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
