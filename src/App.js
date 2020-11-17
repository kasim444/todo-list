import { TodoList, Header } from './component'
import { TodoCreate } from './forms'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import { values } from 'mobx'

const App = observer((props) => {
  return (
    <Router>
      <Header />

      {values(props.store.todos).map((todo) => (
        <p>{todo.name}</p>
      ))}
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
})

export default App
