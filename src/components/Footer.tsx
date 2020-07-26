import React from 'react';
import styled from 'styled-components';
import { Colors, Dimensions } from '../entities/enums';

export default function Footer() {
  return (
    <FooterStyle>
      Inês Carvalho &copy; {new Date().getFullYear()}, Built with
      {` `}
      <LinkStyle href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </LinkStyle>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  height: ${Dimensions.FooterHeight};
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
  text-align: right;
  width: 100%;
  line-height: ${Dimensions.FooterHeight};
  box-sizing: border-box;
  padding: 0 ${Dimensions.SpacingM};
`;

const LinkStyle = styled.a`
  color: #ffffff;

  &:hover {
    color: inherit;
  }
`;
