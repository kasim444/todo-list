import { observer } from 'mobx-react-lite'
import React from 'react'
import { Layout } from '../../component'
import { useStore } from '../../models/RootStore'

const TodoList = observer(function TodoList() {
  const { todos } = useStore()

  return (
    <Layout>
      <div>TodoList</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
        </div>
      ))}
    </Layout>
  )
})

export default TodoList
