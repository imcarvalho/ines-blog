import React from 'react';
import styled from 'styled-components';
import { Colors, Dimensions } from '../entities/enums';

export default function Footer() {
  return (
    <FooterStyle>
      <span>
        Built with
        {` `}
        <LinkStyle href="https://www.gatsbyjs.org" target="_blank">
          Gatsby
        </LinkStyle>
        , hosted on{' '}
        <LinkStyle href="https://www.netlify.com" target="_blank">
          Netlify
        </LinkStyle>
      </span>
      <span>&copy; {new Date().getFullYear()}</span>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  height: ${Dimensions.FooterHeight};
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
  width: 100%;
  line-height: ${Dimensions.FooterHeight};
  box-sizing: border-box;
  padding: 0 ${Dimensions.SpacingM};
  display: flex;
  justify-content: space-between;
`;

const LinkStyle = styled.a`
  color: #ffffff;
  &:hover {
    color: #ffffff;
  }
  &:visited {
    color: #ffffff;
  }
`;
