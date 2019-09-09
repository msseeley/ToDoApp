import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons'

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar_generic" >
      <li>Inbox</li>
      <li>Today</li>
      <li>Next 7 Days</li>
    </ul>
  </div>
)
