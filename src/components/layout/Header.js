import React from 'react'

export const Header = () => {
  return (
    <header className="header" data-testId="header">
      <nav>
        <div className="logo">
          {/* this source is available in the link w/tutorial video */}
          <img src="/images/logo.png" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>Pizza Slice!</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
