import { Layout, Switch as AntSwitch } from 'antd'
import styled from 'styled-components'

const { Sider: SideContainer } = Layout

export const Sider = styled(SideContainer)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

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
    .ant-switch-handle::before {
      background: ${({ theme }) => theme.color.head};
    }
  }
`
