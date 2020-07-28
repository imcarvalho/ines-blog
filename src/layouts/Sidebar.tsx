import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Heading } from 'tamia';
import { SidebarPosts } from '../entities/Post';

export default function Sidebar(props) {
  // @TODO: have some sort of month links
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
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
      `}
      render={data => <SidebarComponent data={data} {...props} />}
    />
  );
}

function SidebarComponent({ data }: { data: { allMdx: SidebarPosts } }) {
  if (!data) {
    return null;
  }

  return (
    <nav>
      <Heading level={4} mb="m">
        Latest Posts
      </Heading>
      <ul>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.fields.slug}>
            <Link to={`/blog${node.fields.slug}`}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
