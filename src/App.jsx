import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import RqSuperHeroesPage from './components/RqSuperHeroesPage'
import SuperHerosPage from './components/SuperHerosPage'

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/super-heroes'>
              <SuperHerosPage/>
            </Route>
            <Route path='/rq-super-heroes'>
              <RqSuperHeroesPage/>
            </Route>
            <Route path='/'>
             <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
