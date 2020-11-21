import { types } from 'mobx-state-tree'

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber,
  })
  .actions((self) => ({
    changeText(text) {
      self.text = text
    },
    toggleDone() {
      self.done = !self.done
    },
  }))

export default Todo
