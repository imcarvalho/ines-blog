import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box } from 'tamia';
import { PostExcerpt } from '../entities/Post';

export default function PreviousNextPosts(props: {
  previousNextPosts: {
    previous: PostExcerpt | null;
    next: PostExcerpt | null;
  };
}) {
  if (!props.previousNextPosts.previous && !props.previousNextPosts.next) {
    return null;
  }

  const posts = props.previousNextPosts;

  return (
    <ul>
      <Flex justifyContent="center">
        {posts.previous && (
          <li>
            <Box mr="m">
              <Link to={`/blog${posts.previous.fields.slug}`} rel="prev">
                ← {posts.previous.frontmatter.title}
              </Link>
            </Box>
          </li>
        )}
        {posts.next && (
          <li>
            <Box ml="m">
              <Link to={`/blog${posts.next.fields.slug}`} rel="posts.next">
                {posts.next.frontmatter.title} →
              </Link>
            </Box>
          </li>
        )}
      </Flex>
    </ul>
  );
}
