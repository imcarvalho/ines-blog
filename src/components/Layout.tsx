import React from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, Dimensions } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';
import SocialIcons from './SocialIcons';
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
    <>
      <GlobalStyle />
      <MainContentWrapperStyle>
        <HeaderStyle isLanding={isLanding}>
          <div>
            <LinkStyle to={rootPath}>
              <AvatarStyle
                isLanding={isLanding}
                src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
                alt="Home"
              />
            </LinkStyle>
          </div>
          <TextContainerStyle isLanding={isLanding}>
            <TitleStyle>
              {isLanding ? props.siteMetadata.title : props.siteMetadata.author}
            </TitleStyle>
            <SubTitleStyle>Senior Frontend Developer</SubTitleStyle>
            <SocialIcons
              isLanding={isLanding}
              socialLinks={props.siteMetadata.social}
            />
          </TextContainerStyle>
        </HeaderStyle>
        <Main>{props.children}</Main>
      </MainContentWrapperStyle>
      {!isLanding && <Footer />}
    </>
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

const LinkStyle = styled(Link)`
  color: ${Colors.LightBackground};
`;

const HeaderStyle = styled.header<{ isLanding: boolean }>`
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
  display: flex;
  flex-direction: ${props => (props.isLanding === true ? 'column' : 'row')};
  text-align: center;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const TextContainerStyle = styled.div<{ isLanding: boolean }>`
  ${props =>
    props.isLanding === false &&
    `
padding-left: 30px;
text-align: left;
`}
`;

const TitleStyle = styled.h1`
  font-size: 48px;
  font-family: 'Pacifico', 'Lato', sans-serif;
  margin: 0;
  line-height: 1.5em;
`;

const SubTitleStyle = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
`;

const AvatarStyle = styled.img<{ isLanding: boolean }>`
  border-radius: 50%;
  border: 10px #ffffff solid;
  width: ${props => (props.isLanding ? 200 : 150)}px;
  margin: auto;
  box-sizing: content-box;
`;

const Main = styled.main`
  color: ${Colors.LightText};
  font-family: 'Lato', sans-serif;
  padding: 20px;
`;

const MainContentWrapperStyle = styled.div`
  min-height: calc(100vh - ${Dimensions.FooterHeight});
`;
