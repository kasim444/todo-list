import styled from 'styled-components'
import { Layout as AntLayout } from 'antd'

export const Layout = styled(AntLayout)`
  background: ${({ theme }) => theme.color.secondaryBackground};
  min-height: 100vh;
  max-width: 768px;
  margin: 0px auto;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.color.head};
`
