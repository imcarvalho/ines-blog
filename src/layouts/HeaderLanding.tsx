import React from 'react';
import { Link } from 'gatsby';
import { Container, Flex, Heading, Box } from 'tamia';
import styled from 'styled-components';
import { Colors } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import SocialIcons from '../components/SocialIcons';

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
              <AvatarStyle
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

const LinkStyle = styled(Link)`
  color: ${Colors.LightBackground};
`;

const HeaderStyle = styled.header`
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
`;

const HeadingHeaderStyle = styled(Heading)<{ level: number }>`
  color: ${Colors.LightBackground};
  ${props => props.level === 2 && `font-size: 1.5rem`}
`;

const AvatarStyle = styled.img`
  border-radius: 50%;
  border: 10px ${Colors.LightBackground} solid;
  width: 200px;
  margin: auto;
  box-sizing: content-box;
`;
