import { Layout as Container } from 'antd'
import styles from './layout.module.css'
const { Content } = Container

export default function Layout({ children }) {
  return (
    <Container className={styles.container}>
      <Content>{children}</Content>
    </Container>
  )
}
