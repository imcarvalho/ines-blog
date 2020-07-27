import React from 'react';
import { Container, Flex, Box } from 'tamia';
import styled from 'styled-components';
import { SiteMetadata } from '../entities/SiteMetadata';
import SocialIcons from '../components/SocialIcons';
import {
  LinkStyle,
  HeaderStyle,
  HeadingHeaderStyle,
  AvatarStyle,
} from './styles/HeaderStyles';

export default function Layout(props: { siteMetadata: SiteMetadata }) {
  // @ts-ignore until I discover how to get Typescript to figure out __PATH_PREFIX__
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <HeaderStyle>
      <Container>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box paddingBottom="s">
            <LinkStyle to={rootPath}>
              <AvatarLandingStyle
                src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
                alt="Home"
              />
            </LinkStyle>
          </Box>
          <Box paddingBottom="m">
            <HeadingHeaderStyle level={1}>
              {props.siteMetadata.title}
            </HeadingHeaderStyle>
          </Box>
          <Box paddingBottom="m">
            <HeadingHeaderStyle level={2}>
              Senior Frontend Developer
            </HeadingHeaderStyle>
          </Box>
          <Box>
            <SocialIcons socialLinks={props.siteMetadata.social} isLanding />
          </Box>
        </Flex>
      </Container>
    </HeaderStyle>
  );
}

const AvatarLandingStyle = styled(AvatarStyle)`
  width: 200px;
`;
