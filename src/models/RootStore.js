import { types, destroy } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import Todo from './Todo'
import Ui from './Ui'
import makeInspectable from 'mobx-devtools-mst'

const RootModel = types
  .model({
    todos: types.array(Todo),
    theme: Ui,
  })
  .actions((self) => ({
    addTodo(todoItem) {
      self.todos.push(todoItem)
    },
    updateTodos(newTodos) {
      self.todos = newTodos
    },
    removeTodo(todoItem) {
      destroy(todoItem)
    },
    updateTodo(todoId, todo) {
      const oldTodos = Array.from(self.todos)
      const currentTodoIndex = self.todos.findIndex((t) => t.id === todoId)
      const newTodos = oldTodos.splice(currentTodoIndex, 0, todo)
      self.todos = newTodos
    },
  }))
  .views((self) => ({
    get allTodos() {
      return self.todos
    },
    get totalTodo() {
      return self.todos.length
    },
  }))

export const RootStore = RootModel.create({
  todos: [],
  theme: {
    activeTheme: 'dark',
  },
})

makeInspectable(RootStore)

const RootStoreContext = createContext(null)

export const Provider = RootStoreContext.Provider

export const useStore = () => {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }

  return store
}
