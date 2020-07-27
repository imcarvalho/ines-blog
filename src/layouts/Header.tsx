import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Colors, Dimensions } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import SocialIcons from './../components/SocialIcons';

export default function Layout(props: {
  isLanding: boolean;
  siteMetadata: SiteMetadata;
}) {
  // @ts-ignore until I discover how to get Typescript to figure out __PATH_PREFIX__
  const rootPath = `${__PATH_PREFIX__}/`;

  if (!props.siteMetadata) {
    return null;
  }

  return (
    <HeaderStyle isLanding={props.isLanding}>
      <div>
        <LinkStyle to={rootPath}>
          <AvatarStyle
            isLanding={props.isLanding}
            src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
            alt="Home"
          />
        </LinkStyle>
      </div>
      <TextContainerStyle isLanding={props.isLanding}>
        <TitleStyle>
          {props.isLanding
            ? props.siteMetadata.title
            : props.siteMetadata.author}
        </TitleStyle>
        <SubTitleStyle>Senior Frontend Developer</SubTitleStyle>
        <SocialIcons
          isLanding={props.isLanding}
          socialLinks={props.siteMetadata.social}
        />
      </TextContainerStyle>
    </HeaderStyle>
  );
}

const LinkStyle = styled(Link)`
  color: ${Colors.LightBackground};
`;

const HeaderStyle = styled.header<{ isLanding: boolean }>`
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
  display: flex;
  flex-direction: ${props => (props.isLanding === true ? 'column' : 'row')};
  text-align: center;
  padding: ${Dimensions.SpacingM};
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
  margin-bottom: ${Dimensions.SpacingM};
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
