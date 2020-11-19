import { types } from 'mobx-state-tree'

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber,
  })
  .actions((self) => ({
    changeName(newName) {
      self.name = newName
    },
    toggleDone() {
      self.done = !self.done
    },
  }))

export default Todo
