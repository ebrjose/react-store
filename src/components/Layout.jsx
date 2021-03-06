import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../styles/components/Layout.scss'

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
