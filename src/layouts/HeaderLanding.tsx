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
  return (
    <HeaderStyle>
      <Container>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box paddingBottom="s">
            <AvatarLandingStyle
              src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
              alt=""
            />
          </Box>
          <Box paddingBottom="m">
            <HeadingHeaderStyle level={1}>
              <LinkStyle
                to={
                  // @ts-ignore until I discover how to get Typescript to figure out __PATH_PREFIX__
                  __PATH_PREFIX__
                }
              >
                {props.siteMetadata.title}
              </LinkStyle>
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
