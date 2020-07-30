import { Link } from 'gatsby';
import { Heading } from 'tamia';
import styled from 'styled-components';
import theme from '../../theme';

export const LinkStyle = styled(Link)`
  color: ${theme.colors.headerForeground};
  text-decoration: none;
`;

export const HeaderStyle = styled.header`
  background-color: ${theme.colors.header};
  color: ${theme.colors.headerForeground};
`;

export const HeadingHeaderStyle = styled(Heading)<{ level: number }>`
  color: ${theme.colors.headerForeground};
  ${props => props.level === 2 && `font-size: 1.5rem`}
`;

export const AvatarStyle = styled.img`
  border-radius: 50%;
  border: 10px ${theme.colors.headerForeground} solid;
  margin: auto;
  box-sizing: content-box;
  @media (max-width: 768px) {
    display: none;
  }
`;
