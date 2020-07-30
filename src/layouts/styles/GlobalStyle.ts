import { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

// overriding some of the Tâmia styles
export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      }
  a {
    color: ${theme.colors.primary};
  }
  p {
    padding: 5px 0;
  }
`;
