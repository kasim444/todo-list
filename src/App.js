import { Layout } from 'antd'
import { observer } from 'mobx-react-lite'
import { ThemeProvider } from 'styled-components'
import { SideMenu, TodoList } from './component'
import { Provider, RootStore } from './models/RootStore'
import { darkTheme, GlobalStyles, lightTheme } from './theme'

const App = observer(() => {
  return (
    <Provider value={RootStore}>
      <ThemeProvider
        theme={
          RootStore.theme.activeTheme === 'light' ? lightTheme : darkTheme
        }>
        <GlobalStyles />
        <Layout>
          <SideMenu />
          <TodoList />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
})

export default App
