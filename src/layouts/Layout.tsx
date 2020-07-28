import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Container, Flex } from 'tamia';
import Provider from './Provider';
import { Colors, Dimensions } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';
import { SidebarPost } from '../entities/Post';
import Header from './Header';
import HeaderLanding from './HeaderLanding';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout(props: {
  location: Location;
  siteMetadata: SiteMetadata;
  children: React.ReactNode;
  latestPosts?: SidebarPost;
}) {
  // @ts-ignore until I discover how to get Typescript to figure out __PATH_PREFIX__
  const rootPath = `${__PATH_PREFIX__}/`;

  if (!props.siteMetadata) {
    return null;
  }

  const isLanding = props.location.pathname === rootPath;

  return (
    <Provider>
      <GlobalStyle />
      <MainContentWrapperStyle>
        {isLanding ? (
          <HeaderLanding siteMetadata={props.siteMetadata} />
        ) : (
          <Header siteMetadata={props.siteMetadata} />
        )}
        <Container>
          <Flex width={1} flex="0 25em">
            {!isLanding && props.latestPosts && (
              <Flex flexShrink={0} width="300px">
                <Sidebar latestPosts={props.latestPosts} />
              </Flex>
            )}
            <Flex flexGrow={1} width="100%" flexDirection="column">
              <main>{props.children}</main>
            </Flex>
          </Flex>
        </Container>
      </MainContentWrapperStyle>
      <Footer />
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      width: 100%
      }
  a {
    font-weight: 700;
    text-decoration: none;
    color: ${Colors.LightForeground};
    transition: color 1s;
      &:hover {
          color: ${Colors.LightForegroundHover};
      }
  }
`;

const MainContentWrapperStyle = styled.div`
  min-height: calc(100vh - ${Dimensions.FooterHeight});
`;
