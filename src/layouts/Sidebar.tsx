import React from 'react';
import { Link } from 'gatsby';
import { Text } from 'tamia';
import { SidebarPost } from '../entities/Post';

export default function Sidebar(props: { latestPosts: SidebarPost }) {
  return (
    <nav>
      <Text mb="m">Latest Posts</Text>
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
