import { notification } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useStore } from '../../models/RootStore'
import { Modal, Input, SubmitButton } from './styled'

const CreateTodoModel = observer(() => {
  const [todo, setTodo] = useState('')
  const store = useStore()

  const handleCloseModal = () => {
    store.theme.toggleCreateModal()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveTodo()
    }
  }

  const handleSaveTodo = () => {
    if (todo === '') {
      return
    }
    const newTodo = {
      text: todo,
      completed: false,
      id: store.totalTodo + 1,
    }
    store.addTodo(newTodo)
    notification.success({
      message: 'Todo added.',
      placement: 'bottomRight',
    })
    setTodo('')
  }

  return (
    <Modal
      title='Add new to do'
      centered
      visible={store.theme.isOpenedCreateTodoModal}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      footer={[]}>
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='What is your focus today?'
      />
      <SubmitButton onClick={handleSaveTodo}>Add</SubmitButton>
    </Modal>
  )
})

export default CreateTodoModel
