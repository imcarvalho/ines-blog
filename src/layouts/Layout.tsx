import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Flex } from 'tamia';
import Provider from './Provider';
import { Dimensions } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './Header';
import HeaderLanding from './HeaderLanding';
import Footer from './Footer';
import Sidebar from './Sidebar';

function LayoutComponent(props: {
  location: Location;
  data: { site: { siteMetadata: SiteMetadata } };
  children: React.ReactNode;
}) {
  // @ts-ignore until I discover how to get Typescript to figure out __PATH_PREFIX__
  const rootPath = `${__PATH_PREFIX__}/`;

  if (!props.data) {
    return null;
  }

  const isLanding = props.location.pathname === rootPath;

  return (
    <Provider>
      <GlobalStyle />
      <MainContentWrapperStyle>
        {isLanding ? (
          <HeaderLanding siteMetadata={props.data.site.siteMetadata} />
        ) : (
          <Header siteMetadata={props.data.site.siteMetadata} />
        )}
        <Container>
          <Flex
            width={1}
            pt="m"
            flex="0 25em"
            flexDirection={['column', 'column', 'row-reverse']}
          >
            <Flex
              flexGrow={1}
              width={'100%'}
              flexDirection="column"
              mb={['xl', 'xl', 0]}
            >
              <main>{props.children}</main>
            </Flex>
            {!isLanding && (
              <Flex flexShrink={0} width={[1, 1, '250px']}>
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

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            ...SiteMetadataFragment
          }
        }
      `}
      render={data => <LayoutComponent data={data} {...props} />}
    />
  );
}

const MainContentWrapperStyle = styled.div`
  min-height: calc(100vh - ${Dimensions.FooterHeight});
`;
