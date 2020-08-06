import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Text } from 'tamia';
import PreviousNextPosts from './PreviousNextPosts';
import { PostExcerpt } from '../entities/Post';

export default function PostFooter(props: {
  previousNextPosts: {
    previous: PostExcerpt | null;
    next: PostExcerpt | null;
  };
  tags: string;
}) {
  return (
    <>
      <Flex mt="m" width={1} alignItems="center" flexDirection="column">
        <Text textAlign="end" width={1}>
          <strong>Tags</strong>:{' '}
          <Link to={`/tags/${props.tags}`}>{props.tags}</Link>
        </Text>
        <Box mb="s" mt="s" width={1}>
          <hr />
        </Box>
        <PreviousNextPosts {...props} />
      </Flex>
    </>
  );
}
