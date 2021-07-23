import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

import AppContext from '../context/AppContext'

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext)
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">React Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart" />
        </Link>
        {cart.length > 0 && <span className="Header-alert">{cart.length}</span>}
      </div>
    </header>
  )
}

export default Header
