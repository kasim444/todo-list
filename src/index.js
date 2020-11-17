import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'
import { RootStore } from './models'

const store = RootStore.create({
  users: {},
  todos: {
    1: {
      name: 'Eat a cake',
      done: true,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
