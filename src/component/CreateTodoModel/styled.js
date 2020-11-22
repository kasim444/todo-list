import { Modal as AntModal } from 'antd'
import styled from 'styled-components'

export const Modal = styled(AntModal)`
  .ant-modal-content,
  .ant-modal-header {
    background: ${({ theme }) => theme.color.secondaryWhite};
  }
  .ant-modal-title,
  .ant-modal-close-x {
    color: ${({ theme }) => theme.color.head};
  }

  .ant-modal-title {
    font-weight: bold;
  }

  .ant-modal-body {
    display: flex;
    flex-direction: column;
  }

  .ant-modal-footer {
    display: none;
  }
`

export const Input = styled.input`
  padding: 0.5em 1em;
  border-radius: 32px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  border: 0;
  outline: 0;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
  }
`

export const SubmitButton = styled.button`
  padding: 0.5em 1em;
  margin-top: 15px;
  border: 1px solid ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  color: ${({ theme }) => theme.color.text};
  font-weight: bold;
  box-shadow: -5px -5px 20px white, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 32px;
  border: 0;
  outline: 0;
  &:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px white;
  }
`
