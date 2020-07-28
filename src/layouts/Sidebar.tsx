import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'tamia';
import { SidebarPosts } from '../entities/Post';

export default function Sidebar(props: { latestPosts: SidebarPosts }) {
  // @TODO: have some sort of month links
  return (
    <nav>
      <Heading level={4} mb="m">
        Latest Posts
      </Heading>
      <ul>
        {props.latestPosts.edges.map(({ node }) => (
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
