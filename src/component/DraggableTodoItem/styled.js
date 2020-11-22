import styled, { css } from 'styled-components'
import { Button, Menu } from 'antd'
import { CheckOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons'

export const MoreIcon = styled(MoreOutlined)``

const CheckedIcon = styled(CheckOutlined)`
  color: ${({ theme }) => theme.color.fadedText};
`
const DeleteIcon = styled(DeleteOutlined)`
  color: ${({ theme }) => theme.color.fadedText};
`

const DropdownItemButton = styled(Button)`
  transition: all 0.3s ease;
  background: transparent;
  border-color: none;
  color: ${({ theme }) => theme.color.fadedText};
  border: none;
  outline: none;

  &::selection {
  }

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.color.head};
    background: transparent;
    border: none;

    ${DeleteIcon} {
      color: ${({ theme }) => theme.color.head};
    }
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
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.2),
    -9px -9px 16px rgba(255, 255, 255, 0.1);

  & + & {
    margin-top: 1em;
  }

  &:hover {
    border: 1px solid rgb(198 165 103 / 0.2);
    box-shadow: 9px 9px 16px rgb(198 165 103 / 0.2),
      -9px -9px 16px rgb(198 165 103 / 0.2);
  }
`

export const TodoItem = {
  Container: TodoItemContainer,
  Row: TodoItemRow,
  Text: TodoItemText,
  CheckedIcon: CheckedIcon,
  DeleteIcon: DeleteIcon,
  DropdownItemButton: DropdownItemButton,
  Menu: Menu,
}
