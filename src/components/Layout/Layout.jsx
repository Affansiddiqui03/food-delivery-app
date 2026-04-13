import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      {/* ✅ Ye important hai */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout