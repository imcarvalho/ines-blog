import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Heading, Box } from 'tamia';
import { SidebarPosts } from '../entities/Post';

function SidebarComponent(props: {
  data: {
    posts: SidebarPosts;
    tags: { group: { fieldValue: string; totalCount: number }[] };
  };
}) {
  if (!props.data) {
    return null;
  }

  return (
    <nav>
      <Box mb="l">
        <Heading level={4} mb="m">
          Latest Posts
        </Heading>
        <ul>
          {props.data.posts.edges.map(({ node }) => (
            <li key={node.fields.slug}>
              <Link to={`/blog${node.fields.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box mb="l">
        <Heading level={4} mb="m">
          Tags
        </Heading>
        <ul>
          {props.data.tags.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </nav>
  );
}

export default function Sidebar(props) {
  // @TODO: have some sort of month links
  return (
    <StaticQuery
      query={graphql`
        query {
          posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
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
          tags: allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => <SidebarComponent data={data} {...props} />}
    />
  );
}
