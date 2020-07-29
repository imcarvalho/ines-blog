import { Link } from 'gatsby';
import { Heading } from 'tamia';
import styled from 'styled-components';
import { Colors } from '../../entities/enums';

export const LinkStyle = styled(Link)`
  color: ${Colors.LightBackground};
`;

export const HeaderStyle = styled.header`
  background-color: ${Colors.HeaderBackground};
  color: ${Colors.LightBackground};
`;

export const HeadingHeaderStyle = styled(Heading)<{ level: number }>`
  color: ${Colors.LightBackground};
  ${props => props.level === 2 && `font-size: 1.5rem`}
`;

export const AvatarStyle = styled.img`
  border-radius: 50%;
  border: 10px ${Colors.LightBackground} solid;
  margin: auto;
  box-sizing: content-box;
  @media (max-width: 768px) {
    display: none;
  }
`;
