import { TodoList, Header } from './component'
import { TodoCreate } from './forms'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, RootStore } from './models/RootStore'

const App = (props) => {
  return (
    <Provider value={RootStore}>
      <Router>
        <Header />

        <Switch>
          <Route path='/create'>
            <TodoCreate />
          </Route>
          <Route path='/' exact>
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
