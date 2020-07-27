import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from 'tamia';
import Provider from './Provider';
import { Colors, Dimensions } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';
import Header from './Header';
import HeaderLanding from './HeaderLanding';
import Footer from './Footer';

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
          <Header isLanding={isLanding} siteMetadata={props.siteMetadata} />
        )}
        <main>
          <Container>{props.children}</Container>
        </main>
      </MainContentWrapperStyle>
      {!isLanding && <Footer />}
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      background-color: ${Colors.LightBackground};
      font-family: 'Lato', sans-serif;
      }
  a {
      font-weight: bold;
      text-decoration: none;
      box-shadow: none;
      transition: color 1s;
      color: ${Colors.LightForeground};
      &:visited {
          color: ${Colors.LightForeground};
      }
      &:hover {
          color: ${Colors.LightForegroundHover};
      }
  }
  h3 {
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 10px 0;
    }
  ul {
      margin:0;
      padding: 0;
  }
  li { list-style-position: inside; }
`;

const MainContentWrapperStyle = styled.div`
  min-height: calc(100vh - ${Dimensions.FooterHeight});
`;
