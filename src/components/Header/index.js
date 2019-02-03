import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'
import Logo from '../Logo'

const Header = ({ title = '' }) => (
  <header className={styles.header}>
    <div className={styles.header_top}>
      <h1 className={styles.header_home}>
        <Link to="/" title="Go to the home page">
          <Logo className={styles.header_logo} />
        </Link>
      </h1>
      <nav>
        <input type="checkbox" id="menu-open" />
        <label htmlFor="menu-open">
          <span>menu</span>
        </label>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/writing">writing</Link>
          </li>
          <li>
            <Link to="/speaking">speaking</Link>
          </li>
          <li>
            <a href="">twitter</a>
          </li>
        </ul>
      </nav>
    </div>
    <h1 className={styles.header_title}>{title}</h1>
  </header>
)

export default Header
