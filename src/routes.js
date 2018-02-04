import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeComponent from './components/home/home';
import CompartimentoComponent from './components/compartimento/compartimento';

// Declaration of routes for at sub-routes of app.

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeComponent}/>
      <Route exact path='/*' component={CompartimentoComponent}/>
    </Switch>
  </main>
)

export default Routes