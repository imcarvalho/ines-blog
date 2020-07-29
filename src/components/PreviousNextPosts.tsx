import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box } from 'tamia';
import { PostExcerpt } from '../entities/Post';

export default function PreviousNextPosts(props: {
  posts: {
    previous: PostExcerpt | null;
    next: PostExcerpt | null;
  };
}) {
  if (!props.posts.previous && !props.posts.next) {
    return null;
  }

  return (
    <Box mt="l" width={1}>
      <ul>
        <Flex justifyContent="center">
          {props.posts.previous && (
            <li>
              <Box mr="m">
                <Link
                  to={`/blog${props.posts.previous.fields.slug}`}
                  rel="prev"
                >
                  ← {props.posts.previous.frontmatter.title}
                </Link>
              </Box>
            </li>
          )}
          {props.posts.next && (
            <li>
              <Box ml="m">
                <Link
                  to={`/blog${props.posts.next.fields.slug}`}
                  rel="props.posts.next"
                >
                  {props.posts.next.frontmatter.title} →
                </Link>
              </Box>
            </li>
          )}
        </Flex>
      </ul>
    </Box>
  );
}
