import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from 'tamia';
import Provider from './Provider';
import { Dimensions } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';
import { SidebarPosts } from '../entities/Post';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './Header';
import HeaderLanding from './HeaderLanding';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout(props: {
  location: Location;
  siteMetadata: SiteMetadata;
  children: React.ReactNode;
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
          <Flex width={1} flex="0 25em" flexDirection="row-reverse">
            <Flex flexGrow={1} width="100%" flexDirection="column">
              <main>{props.children}</main>
            </Flex>
            {!isLanding && (
              <Flex flexShrink={0} width="250px">
                <Sidebar />
              </Flex>
            )}
          </Flex>
        </Container>
      </MainContentWrapperStyle>
      <Footer />
    </Provider>
  );
}

const MainContentWrapperStyle = styled.div`
  min-height: calc(100vh - ${Dimensions.FooterHeight});
`;
