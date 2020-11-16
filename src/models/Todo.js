import { types } from 'mobx-state-tree'

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName
    },
    toggle() {
      self.done = !self.done
    },
  }))

export default Todo
