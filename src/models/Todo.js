import { types, getParent } from 'mobx-state-tree'

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber,
  })
  .actions((self) => ({
    changeText(text) {
      console.log(`changeText triggered`)
      self.text = text
    },
    toggleDone() {
      console.log(`toggleDone triggered`)
      self.completed = !self.completed
    },
    removeTodo() {
      getParent(self, 2).removeTodo(self)
    },
  }))

export default Todo
