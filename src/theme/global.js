import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    margin: 0;
    padding: 0;
    font-family: 'Cinzel Decorative', cursive;
    font-size: 16px;
    transition: background-color 1.5s linear, color 1s linear;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0px;
  }

  .ant-layout {
    background: ${({ theme }) => theme.color.secondaryBackground};
  }

  .ant-layout-sider,
  .ant-menu.ant-menu-dark.ant-menu-root {
    background: ${({ theme }) => theme.color.background};
  }
`
