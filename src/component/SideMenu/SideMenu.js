import React from 'react'
import { Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Sider, Switch, LogoImage } from './styled'
import { useStore } from '../../models/RootStore'
import { observer } from 'mobx-react-lite'
import logoSrc from '../../assets/images/todo-logo.png'

const SideMenu = observer(function SideMenu() {
  const { theme } = useStore()

  return (
    <Sider.Container>
      <Sider.Header>
        <LogoImage src={logoSrc} alt='Logo' />
      </Sider.Header>
      <Sider.Body>
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
      </Sider.Body>
      <Sider.Footer>
        <h6>Dark Mode</h6>
        <Switch
          checked={theme.activeTheme === 'light' ? false : true}
          onChange={theme.toggleTheme}
        />
      </Sider.Footer>
    </Sider.Container>
  )
})

export default SideMenu
