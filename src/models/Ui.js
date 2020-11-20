import { types } from 'mobx-state-tree'

const Ui = types
  .model({
    activeTheme: types.enumeration('activeTheme', ['light', 'dark']),
  })
  .actions((self) => ({
    toggleTheme() {
      if (self.activeTheme === 'light') {
        self.activeTheme = 'dark'
      } else {
        self.activeTheme = 'light'
      }
    },
  }))

export default Ui
