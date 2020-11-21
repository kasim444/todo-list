import { observer } from 'mobx-react-lite'
import { useStore } from '../../models/RootStore'
import {
  Layout,
  Col,
  Title,
  TodoItem,
  EmptyTodoImage,
  AddIcon,
  AddTodoButton,
} from './styled'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import emptyTodoSrc from '../../assets/images/empty-todo.png'
import { CreateTodoModel } from '../../component'

const TodoList = observer(function TodoList() {
  const store = useStore()

  function handleOnDragEnd(result) {
    if (!result.destination) {
      return
    }
    const items = Array.from(store.allTodos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    store.updateTodo(items)
  }
  return (
    <Layout className='site-layout'>
      <Col>
        <Title>To Do List</Title>
        {store.totalTodo > 0 ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='allTodos'>
              {(provided) => (
                <TodoItem.Container
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {store.allTodos.map((todo, index) => (
                    <Draggable
                      key={todo.id}
                      draggableId={todo.id.toString()}
                      index={index}>
                      {(provided) => (
                        <TodoItem.Row
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          {todo.completed && <TodoItem.CheckedIcon />}
                          <TodoItem.Text
                            {...(todo.completed && { isCompleted: true })}>
                            {todo.text}
                          </TodoItem.Text>
                          <TodoItem.DeleteButton
                            type='text'
                            icon={<TodoItem.DeleteIcon />}
                            block
                          />
                        </TodoItem.Row>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TodoItem.Container>
              )}
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
