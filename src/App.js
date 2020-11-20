import { TodoList, SideMenu } from './component'
import { Provider, RootStore } from './models/RootStore'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './theme'
import { observer } from 'mobx-react-lite'
import { Layout } from 'antd'

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
