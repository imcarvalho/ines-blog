import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex } from 'tamia';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import PreviousNextPosts from '../components/PreviousNextPosts';
import { Post, PostExcerpt } from '../entities/Post';
import { Location } from '../entities/Location';

export default function BlogPostTemplate(props: {
  location: Location;
  data: {
    post: Post;
  };
  pageContext: { previous: PostExcerpt; next: PostExcerpt };
}) {
  if (!props.data) {
    return null;
  }

  const post = props.data.post;

  return (
    <Layout location={props.location}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Flex flexDirection="row" justifyContent="space-between" mb="l">
        <Heading level={2}>{post.frontmatter.title}</Heading>
        <strong>{post.frontmatter.date}</strong>
      </Flex>
      <PostWrapperStyle>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostWrapperStyle>
      <PreviousNextPosts posts={props.pageContext} />
    </Layout>
  );
}

const PostWrapperStyle = styled.div`
  & > ul {
    list-style: circle;
    list-style-position: inside;
    margin: 20px;
  }
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
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
