import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PreviousNextPosts from '../components/PreviousNextPosts';
import { Post, PostExcerpt } from '../entities/Post';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';

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
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr />
      <PreviousNextPosts posts={props.pageContext} />
    </Layout>
  );
}

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
      }
    }
  }
`;
