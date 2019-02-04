import React from 'react'
import styles from './layout.module.scss'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ title = '', children }) => (
  <div className={styles.layout}>
    <Header title={title} />
    {children}
    <Footer />
  </div>
)

export default Layout
