import React from 'react';
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
    <ul>
      <li>
        {props.posts.previous && (
          <Link to={`/blog${props.posts.previous.fields.slug}`} rel="prev">
            ← {props.posts.previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {props.posts.next && (
          <Link
            to={`/blog${props.posts.next.fields.slug}`}
            rel="props.posts.next"
          >
            {props.posts.next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  );
}
