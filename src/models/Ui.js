import { types } from 'mobx-state-tree'

const Ui = types
  .model({
    activeTheme: types.enumeration('activeTheme', ['light', 'dark']),
    isOpenedCreateTodoModal: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggleTheme() {
      if (self.activeTheme === 'light') {
        self.activeTheme = 'dark'
      } else {
        self.activeTheme = 'light'
      }
    },
    toggleCreateModal() {
      self.isOpenedCreateTodoModal = !self.isOpenedCreateTodoModal
    },
  }))

export default Ui
