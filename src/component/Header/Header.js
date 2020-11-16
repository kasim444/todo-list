import { Layout as Container } from 'antd'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

const { Header: Head } = Container

export default function Header() {
  return (
    <Head className={styles.header}>
      <h1 className={styles.header__title}>To-Do with mobx-state-tree</h1>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/create'>Create</Link>
          </li>
        </ul>
      </nav>
    </Head>
  )
}
