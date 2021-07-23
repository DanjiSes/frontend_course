import React, { useEffect, useState } from 'react'
import { PeopleItem } from './components/PeopleItem'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import { PeoplesPage } from './pages/PeoplesPage'
import { StarshipsPage } from './pages/StarshipsPage'
import { MainPage } from './pages/MainPage'

function App() {
  return (
    <Router>
      <div className="app py-5">
        <div className="container">
          {/* Main title */}
          <h1 className="display-1 mb-5">Star Wars Api</h1>

          {/* Navigation */}
          <nav>
            <ul className="nav mb-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/peoples" className="nav-link">Peoples</Link>
              </li>
              <li className="nav-item">
                <Link to="/starships" className="nav-link">Starships</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/peoples">
              <PeoplesPage/>
            </Route>
            <Route path="/starships">
              <StarshipsPage/>
            </Route>
            <Route path="/">
              <MainPage/>
            </Route>
          </Switch>
        </div>
      </div>  
    </Router>
  )
}

export { App }