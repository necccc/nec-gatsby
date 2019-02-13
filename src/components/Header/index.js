import React from 'react'
import { Link } from 'gatsby'

import Logo from '../Logo'
import styles from './header.module.scss'


//

class Header extends React.Component {

  constructor () {
    super()

    this.state = {
      small: false
    }

    document.addEventListener('scroll', () => {
      const { small } = this.state

      if (!small && window.scrollY >= 92) {
        this.setState({small: true})
      } else if (small && window.scrollY < 92) {
        this.setState({small: false})
      }

    }, window.supportsPassiveScroll ? { passive: true } : false);
  }


  render() {
    const { title = '' } = this.props
    const { small } = this.state

    return (
      <header className={[styles.header, (small ? styles.header__small : '')].join(' ')}>
        <div className={styles.header_top}>
          <h1 className={styles.header_home} title="_Nec">
            <Link to="/" title="Go to the home page">
              <Logo />
              <span className={styles.header_home_text}>_Nec</span>
            </Link>
          </h1>
          {/*
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
          */}
        </div>
        <h1 className={styles.header_title}>{title}</h1>
      </header>
    )
  }
}



export default Header
