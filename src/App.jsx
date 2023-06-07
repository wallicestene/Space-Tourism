import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from './components/Navbar'
import Destination from './components/Destination'
import Home from './components/Home'
import Crew from './components/Crew'
import Technology from './components/Technology'
const App = () => {
  return (
    <>
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/destination' component={Destination} />
          <Route path='/crew' component={Crew} />
          <Route path='/technology' component={Technology} />
        </Switch>
      </Router>
      </div>
      </>
  )
}

export default App