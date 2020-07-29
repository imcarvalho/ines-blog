import React from 'react';
import { Container, Flex, Box } from 'tamia';
import styled from 'styled-components';
import { SiteMetadata } from '../entities/SiteMetadata';
import SocialIcons from './../components/SocialIcons';
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
        <Flex alignItems="center" justifyContent="center" flexDirection="row">
          <LinkStyle to={rootPath}>
            <AvatarDefaultStyle
              src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
              alt="Home"
            />
          </LinkStyle>
          <Flex
            flexDirection="column"
            paddingLeft="l"
            alignItems={['center', 'center', 'flex-start']}
            justifyContent="center"
          >
            <Box pb="m">
              <HeadingHeaderStyle level={1}>
                {props.siteMetadata.author}
              </HeadingHeaderStyle>
            </Box>
            <Box pb="m">
              <HeadingHeaderStyle level={2}>
                Senior Frontend Developer
              </HeadingHeaderStyle>
            </Box>
            <SocialIcons
              socialLinks={props.siteMetadata.social}
              isLanding={false}
            />
          </Flex>
        </Flex>
      </Container>
    </HeaderStyle>
  );
}

const AvatarDefaultStyle = styled(AvatarStyle)`
  width: 150px;
`;
