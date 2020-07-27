import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { SiteMetadata } from '../entities/SiteMetadata';

export default function TagsPage(props: {
  location: Location;
  data: {
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    site: { siteMetadata: SiteMetadata };
  };
}) {
  if (!props.data) {
    console.log(props);
    return null;
  }

  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <h1>Tags</h1>
      <ul>
        {props.data.allMdx.group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      ...SiteMetadataFragment
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
