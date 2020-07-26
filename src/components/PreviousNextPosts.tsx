import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
    <ListStyle>
      {props.posts.previous && (
        <ListItem>
          <Link to={`/blog${props.posts.previous.fields.slug}`} rel="prev">
            ← {props.posts.previous.frontmatter.title}
          </Link>
        </ListItem>
      )}
      {props.posts.next && (
        <ListItem>
          <Link
            to={`/blog${props.posts.next.fields.slug}`}
            rel="props.posts.next"
          >
            {props.posts.next.frontmatter.title} →
          </Link>
        </ListItem>
      )}
    </ListStyle>
  );
}

const ListStyle = styled.ul`
  margin-top: 20px;
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  padding: 0 20px;
`;
