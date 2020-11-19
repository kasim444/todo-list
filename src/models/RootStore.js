import { types, destroy } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import Todo from './Todo'

const RootModel = types
  .model({
    todos: types.array(Todo),
  })
  .actions((self) => ({
    addTodo(todoItem) {
      self.todos.push(todoItem)
    },
    removeTodo(todoItem) {
      destroy(todoItem)
    },
  }))
  .views((self) => ({
    get totalTodo() {
      return self.todos.length
    },
  }))

export const RootStore = RootModel.create({
  todos: [
    {
      text: 'learn Mobx',
      completed: false,
      id: 0,
    },
    {
      text: 'learn MST',
      completed: false,
      id: 1,
    },
  ],
})

const RootStoreContext = createContext(null)

export const Provider = RootStoreContext.Provider

export const useStore = () => {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }

  return store
}
