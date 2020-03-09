import React from 'react'
import { NavLink} from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="ls-active" to="/">Dashboard</NavLink>
    <NavLink exact={true} activeClassName="ls-active" to="/create">Create Expense</NavLink>
    <NavLink exact={true} activeClassName="ls-active" to="/edit">Edit Expense</NavLink>
    <NavLink exact={true} activeClassName="ls-active" to="/help">Help</NavLink>
  </header>
)

export default Header
