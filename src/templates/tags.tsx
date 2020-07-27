import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { SiteMetadata } from '../entities/SiteMetadata';

type Data = {
  allMdx: {
    totalCount: number;
    edges: {
      node: {
        frontmatter: {
          title: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
  site: { siteMetadata: SiteMetadata };
};

export default function Tags(props: {
  location: Location;
  pageContext: { tag: string };
  data: Data;
}) {
  if (!props.data) {
    return null;
  }

  const { edges, totalCount } = props.data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${props.pageContext.tag}"`;

  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <Link to="/tags">All tags</Link>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    site {
      ...SiteMetadataFragment
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
