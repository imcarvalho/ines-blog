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
  return (
    <HeaderStyle>
      <Container>
        <Flex alignItems="center" justifyContent="center" flexDirection="row">
          <div>
            <AvatarDefaultStyle
              src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
              alt="Home"
            />
          </div>
          <Flex
            flexDirection="column"
            paddingLeft="l"
            alignItems={['center', 'center', 'flex-start']}
            justifyContent="center"
          >
            <Box pb="m">
              <HeadingHeaderStyle level={1}>
                <LinkStyle to="/">{props.siteMetadata.author}</LinkStyle>
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
