import React from 'react'
import { TodoItem } from './styled'
import { Draggable } from 'react-beautiful-dnd'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../models/RootStore'

const DraggableTodoItem = observer(({ provided }) => {
  const store = useStore()

  return (
    <TodoItem.Container {...provided.droppableProps} ref={provided.innerRef}>
      {store.todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
          {(provided) => (
            <TodoItem.Row
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}>
              {todo.completed && <TodoItem.CheckedIcon />}
              <TodoItem.Text {...(todo.completed && { isCompleted: true })}>
                {todo.text}
              </TodoItem.Text>

              <TodoItem.DropdownItemButton
                icon={<TodoItem.DeleteIcon />}
                onClick={todo.removeTodo}
              />
            </TodoItem.Row>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </TodoItem.Container>
  )
})

export default DraggableTodoItem
