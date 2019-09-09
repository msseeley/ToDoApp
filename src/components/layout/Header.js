import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          {/* this source is available in the link w/tutorial video */}
          <img src="/images/logo.png" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <FaPizzaSlice />
          </ul>
        </div>
      </nav>
    </header>
  )
}
