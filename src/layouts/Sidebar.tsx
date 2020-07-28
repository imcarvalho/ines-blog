import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Heading, Box, Flex } from 'tamia';

function SidebarComponent(props: {
  data: {
    tags: { group: { fieldValue: string; totalCount: number }[] };
  };
}) {
  if (!props.data) {
    return null;
  }

  return (
    <Flex
      flexDirection={['row', 'row', 'column']}
      justifyContent={['space-evenly', 'space-evenly', 'flex-start']}
      width={1}
    >
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
    </Flex>
  );
}

export default function Sidebar(props) {
  // @TODO: have some sort of month links
  return (
    <StaticQuery
      query={graphql`
        query {
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
