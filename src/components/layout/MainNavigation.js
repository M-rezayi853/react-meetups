import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import FavoritesContext from '../../store/favorites-context'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  const history = useHistory()

  const favoritesCtx = useContext(FavoritesContext)

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo} onClick={() => history.push('/')}>React Meetups</div>
        
        <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/new-meetup'>Add New Meetup</Link>
            </li>
            <li>
              <Link to='/favorites'>
                My Favorites
                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default MainNavigation
