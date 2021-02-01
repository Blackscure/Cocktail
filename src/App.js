import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import Random from './Components/Random'
import Home from './Components/Home'

function App () {
    return (
        <Router>
          <Switch>
            <Route path="/random">
              <Random/>
            </Route>

            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
            
        
    )
}

export default App 
