import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Flex } from 'tamia';
import { Colors, Dimensions } from '../entities/enums';

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
  height: ${Dimensions.FooterHeight};
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
  width: 100%;
  line-height: ${Dimensions.FooterHeight};
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