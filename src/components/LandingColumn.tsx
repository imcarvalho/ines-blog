import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Flex } from 'tamia';

export default function LandingColumn(props: {
  children: React.ReactNode;
  icon: string;
  title: string;
}) {
  return (
    <Box width="33%">
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        mb="m"
      >
        <Box mb="m">
          <IconStyle src={props.icon} aria-hidden="true" alt="" />
        </Box>
        <Heading level={3}>{props.title}</Heading>
      </Flex>
      {props.children}
    </Box>
  );
}

const IconStyle = styled.img`
  height: 50px;
  width: 50px;
  margin: 0;
`;
