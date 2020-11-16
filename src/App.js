import { TodoList, Header } from './component'
import { TodoCreate } from './forms'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
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
  )
}

export default App
