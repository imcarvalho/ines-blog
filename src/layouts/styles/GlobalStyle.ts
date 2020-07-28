import { createGlobalStyle } from 'styled-components';
import { Colors } from '../../entities/enums';

// overriding some of the Tâmia styles
export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      width: 100%
      }
  a {
    font-weight: 700;
    text-decoration: none;
    color: ${Colors.LightForeground};
    transition: color 1s;
      &:hover {
          color: ${Colors.LightForegroundHover};
      }
  }
  p {
    padding-bottom: 10px;
  }
`;
