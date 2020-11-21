import styled, { css } from 'styled-components'
import { Layout as AntLayout, Button } from 'antd'
import { CheckOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'

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
const CheckedIcon = styled(CheckOutlined)`
  color: ${({ theme }) => theme.color.fadedText};
`

const DeleteIcon = styled(DeleteOutlined)`
  color: ${({ theme }) => theme.color.fadedText};
`

const DeleteButton = styled(Button)`
  display: none;
  flex: 0;
  transition: all 0.3s ease;
  background: transparent;
  border-color: none;
  color: transparent;
  border: none;
  outline: none;

  &::selection {
  }

  &:hover,
  &:focus,
  &:active {
    color: transparent;
    background: transparent;
    border: none;
    transform: scale(1.2);
  }
`

const TodoItemText = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.color.text};
  text-align: center;

  ${(props) =>
    props.isCompleted &&
    css`
      color: ${({ theme }) => theme.color.fadedText};
      text-decoration: line-through;
      margin-left: 15px;
    `}
`

const TodoItemContainer = styled.div`
  width: 100%;
`

const TodoItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 11px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);

  & + & {
    margin-top: 1em;
  }

  &:hover {
    border: 1px solid rgb(198 165 103 / 0.2);
    box-shadow: 9px 9px 16px rgb(198 165 103 / 0.2),
      -9px -9px 16px rgb(198 165 103 / 0.2);

    ${DeleteButton} {
      display: block;
    }
  }
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

export const TodoItem = {
  Container: TodoItemContainer,
  Row: TodoItemRow,
  Text: TodoItemText,
  CheckedIcon: CheckedIcon,
  DeleteIcon: DeleteIcon,
  DeleteButton: DeleteButton,
}
