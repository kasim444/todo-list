import { observer } from 'mobx-react'
import React from 'react'
import { Layout } from '../../component'
import { RootStore } from '../../models'

const TodoList = function TodoList() {
  return (
    <Layout>
      <div>TodoList</div>
    </Layout>
  )
}

export default observer(TodoList)
