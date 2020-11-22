import { observer } from 'mobx-react-lite'
import { useStore } from '../../models/RootStore'
import {
  Layout,
  Col,
  Title,
  EmptyTodoImage,
  AddIcon,
  AddTodoButton,
} from './styled'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import emptyTodoSrc from '../../assets/images/empty-todo.png'
import { CreateTodoModel, DraggableTodoItem } from '../../component'

const TodoList = observer(function TodoList() {
  const store = useStore()

  function handleOnDragEnd(result) {
    if (!result.destination) {
      return
    }
    const items = Array.from(store.allTodos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    store.updateTodos(items)
  }

  return (
    <Layout className='site-layout'>
      <Col>
        <Title>To Do List</Title>
        {store.totalTodo > 0 ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='allTodos'>
              {(provided) => <DraggableTodoItem provided={provided} />}
            </Droppable>
          </DragDropContext>
        ) : (
          <>
            <EmptyTodoImage src={emptyTodoSrc} alt='Empty Todo' />
          </>
        )}
        <AddTodoButton
          shape='circle'
          type='text'
          icon={<AddIcon />}
          onClick={store.theme.toggleCreateModal}
        />
        {store.theme.isOpenedCreateTodoModal && <CreateTodoModel />}
      </Col>
    </Layout>
  )
})

export default TodoList
