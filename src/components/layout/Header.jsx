import Logo from 'components/svgs/Logo'
import React from 'react'
import { Link } from 'react-router-dom'
import { header } from 'styles/Header.Module.scss'

const Header = () => {
  return (
    <header className={header}>
      <nav className="navbar navbar-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
