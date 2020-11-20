import { observer } from 'mobx-react-lite'
import { useStore } from '../../models/RootStore'
import { Layout, Title } from './styled'

const TodoList = observer(function TodoList() {
  const { todos, theme } = useStore()

  return (
    <Layout className='site-layout'>
      <Title>To Do List</Title>
      <button onClick={theme.toggleTheme}>{theme.activeTheme}</button>
    </Layout>
  )
})

export default TodoList
