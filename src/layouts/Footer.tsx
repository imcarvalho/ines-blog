import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from 'tamia';
import theme from '../theme';

export default function Footer() {
  return (
    <FooterStyle>
      <ContainerNoPaddingStyle>
        <Flex justifyContent="space-between">
          <span>
            Built with
            {` `}
            <LinkStyle href="https://www.gatsbyjs.org" target="_blank">
              Gatsby
            </LinkStyle>{' '}
            and{' '}
            <LinkStyle href="https://tamiadev.github.io/tamia/" target="_blank">
              Tâmia
            </LinkStyle>
            , hosted on{' '}
            <LinkStyle href="https://www.netlify.com" target="_blank">
              Netlify
            </LinkStyle>
          </span>
          <span>&copy; {new Date().getFullYear()}</span>
        </Flex>
      </ContainerNoPaddingStyle>
    </FooterStyle>
  );
}

const ContainerNoPaddingStyle = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
`;

const FooterStyle = styled.footer`
  height: ${theme.page.footerHeight};
  background-color: ${theme.colors.header};
  color: ${theme.colors.headerForeground};
  width: 100%;
  line-height: ${theme.page.footerHeight};
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
