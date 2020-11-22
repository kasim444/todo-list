import styled from 'styled-components'
import { Layout as AntLayout, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export const Layout = styled(AntLayout)`
  background: ${({ theme }) => theme.color.secondaryBackground};
  min-height: 100vh;
  max-width: 768px;
  margin: 0px auto;
`
export const Col = styled.div`
  max-width: 355px;
  margin: 40px auto 0px auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.color.head};
  margin-bottom: 25px;
`

export const DroppableList = styled.div`
  background: ${(props) => (props.isDraggingOver ? 'lightblue' : 'lightgrey')},
  padding: grid,
  width: 250
`

export const EmptyTodoImage = styled.img`
  width: 100%;
`

export const AddIcon = styled(PlusOutlined)`
  color: ${({ theme }) => theme.color.head};
  font-size: 44px;
`

export const AddTodoButton = styled(Button)`
  transition: all 0.3s ease;
  background: transparent;
  border-color: none;
  color: transparent;
  border: none;
  outline: none;
  margin-top: 25px;
  padding: 0px;

  &:hover,
  &:focus,
  &:active {
    color: transparent;
    background: transparent;
    transform: scale(1.1);
  }

  span.anticon {
    font-size: 24px;
  }
`
