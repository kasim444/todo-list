const { types } = require('mobx-state-tree')

const User = types({
  name: types.optional(types.string, ''),
})

export default User
