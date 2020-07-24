import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Post, PostExcerpt } from '../entities/Post';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';

export default function BlogPostTemplate(props: {
  location: Location;
  data: { mdx: Post; site: { siteMetadata: SiteMetadata } };
  pageContext: { previous: PostExcerpt; next: PostExcerpt };
}) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          //   ...scale(-1 / 5),
          display: `block`,
          //   marginBottom: rhythm(1),
          //   marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={
          {
            //   marginBottom: rhythm(1),
          }
        }
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`/blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        social {
          twitter
          github
          linkedin
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
