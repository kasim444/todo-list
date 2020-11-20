import React from 'react'
import { Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Sider, Footer, Switch } from './styled'
import { useStore } from '../../models/RootStore'
import { observer } from 'mobx-react-lite'

const SideMenu = observer(function SideMenu() {
  const { theme } = useStore()

  return (
    <Sider>
      <h6>+</h6>
      <Menu theme='dark' mode='inline'>
        <Menu.Item key='1' icon={<UserOutlined />}>
          In Progress
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
          Completed
        </Menu.Item>
        <Menu.Item key='3' icon={<UserOutlined />}>
          All
        </Menu.Item>
      </Menu>
      <Footer>
        <h6>Dark Mode</h6>
        <Switch
          checked={theme.activeTheme === 'light' ? false : true}
          onChange={theme.toggleTheme}
        />
      </Footer>
    </Sider>
  )
})

export default SideMenu
