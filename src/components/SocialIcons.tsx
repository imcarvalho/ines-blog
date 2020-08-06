import React from 'react';
import { Link } from 'gatsby';
import theme from '../theme';
import styled from 'styled-components';
import { Social } from '../entities/SiteMetadata';
import getIcon from '../utils/getIcon';

export default function SocialIcons(props: {
  socialLinks: Social[];
  isLanding: boolean;
}) {
  return (
    <LinkListStyle>
      {props.socialLinks.map(link => (
        <LinkListItemStyle isLanding={props.isLanding} key={link.label}>
          {link.isExternal ? (
            <RegularLinkStyle
              href={link.url}
              target="_blank"
              aria-label={link.label}
              rel="noreferrer"
            >
              <LinkIconStyle>{getIcon(link.label)}</LinkIconStyle>
            </RegularLinkStyle>
          ) : (
            <BlogLinkStyle to={link.url}>
              <LinkIconStyle>{getIcon(link.label)}</LinkIconStyle>
            </BlogLinkStyle>
          )}
        </LinkListItemStyle>
      ))}
    </LinkListStyle>
  );
}

const LinkStyle = styled(Link)`
  color: ${theme.colors.headerForeground};
`;

const LinkListStyle = styled.ul`
  list-style: none;
`;

const LinkListItemStyle = styled.li<{ isLanding: boolean }>`
  padding: 0 ${theme.space.m};
  display: inline;
  &: first-of-type {
    ${props => props.isLanding === false && `padding: 0 ${theme.space.m} 0 0`};
  }

  @media (max-width: ${theme.breakpoints[1]}) {
    padding: 0 ${theme.space.s};
  }
`;

const BasicLinkStyle = `text-decoration: none;
transition: color 1s;
fill: #ffffff;
outline-color: #4d4d4d;
box-shadow: none;`;

const RegularLinkStyle = styled.a`
  ${BasicLinkStyle}
`;

const BlogLinkStyle = styled(LinkStyle)`
  ${BasicLinkStyle}
`;

const LinkIconStyle = styled.svg`
  width: 24px;
  height: 24px;
  transition: transform 1s;
  &:hover {
    transform: scale(1.5);
  }
  @media (max-width: ${theme.breakpoints[1]}) {
    width: 40px;
    margin-top: ${theme.space.m};
  }
`;
