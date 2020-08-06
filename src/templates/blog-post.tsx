import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Flex, TextContainer, Box } from 'tamia';
import theme from '../theme';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import PostFooter from '../components/PostFooter';
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
      <Flex alignItems="center" flexDirection="column">
        <TextContainer>
          <Flex
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            justifyContent="space-between"
            mb={['m', 'm', 'l']}
          >
            <Heading level={2}>{post.frontmatter.title}</Heading>
            <Box mb={['s', 's', 0]}>
              <strong>{post.frontmatter.date}</strong>
            </Box>
          </Flex>
          <PostWrapperStyle>
            <MDXRenderer>{post.body}</MDXRenderer>
          </PostWrapperStyle>
          <PostFooter
            tags={post.frontmatter.tags}
            previousNextPosts={props.pageContext}
          />
        </TextContainer>
      </Flex>
    </Layout>
  );
}

// @TODO: check how to have spacing on Tâmia images
const PostWrapperStyle = styled.div`
  & > ul {
    list-style: circle;
    list-style-position: inside;
    margin: ${theme.space.m};
  }
  & > h3 {
    margin: ${theme.space.m} 0 ${theme.space.s};
  }

  & > .gatsby-resp-image-wrapper {
    margin: ${theme.space.m} 0;
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
