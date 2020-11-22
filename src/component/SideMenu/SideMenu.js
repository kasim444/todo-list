import React from 'react'
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
