import { Layout, Switch as AntSwitch } from 'antd'
import styled from 'styled-components'

const { Sider: SideContainer } = Layout

const SiderContain = styled(SideContainer)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h6 {
      padding: 0px 16px 0px 24px;
      font-size: ${({ theme }) => theme.fontSizes.title};
      color: ${({ theme }) => theme.color.head};
    }
  }
`
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 24px;
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: ${({ theme }) => theme.color.head};
  }
`

export const Switch = styled(AntSwitch)`
  background: ${({ theme }) => theme.color.head};

  &:focus {
    box-shadow: none;
  }

  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.color.secondaryBackground};
    box-shadow: none;

    .ant-switch-handle::before {
      background: ${({ theme }) => theme.color.head};
    }
  }
`

export const LogoImage = styled.img`
  width: 100%;
`

const Header = styled.div`
  max-width: 100px;
  margin: 0px auto;
`

const Body = styled.div`
  .ant-menu-item {
    color: ${({ theme }) => theme.color.text};
    &:hover {
      color: ${({ theme }) => theme.color.head};
    }
  }
`

export const Sider = {
  Container: SiderContain,
  Header: Header,
  Body: Body,
  Footer: Footer,
}
