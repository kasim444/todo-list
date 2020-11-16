import { types } from 'mobx-state-tree'
import Todo from './Todo'
import User from './User'

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo),
  })
  .actions((self) => ({
    addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }))
    },
  }))

export default RootStore
