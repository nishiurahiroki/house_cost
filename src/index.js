import React, {useState, useReducer} from 'react'
import {render} from 'react-dom'

import reducer from './reducer'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginView from './views/LoginView.jsx'
import HouseCostsView from './views/HouseCostsView.jsx'
import HouseCostHistoriesView from './views/HouseCostHistoriesView.jsx'

import Header from './components/Header.jsx'

const App = () => {
  const [state, dispatch] = useReducer(reducer, {title : ''})

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route render={props => <Header {...props} title={state.title} />} />
        </Switch>
        <Route path="/costs" render={props => <HouseCostsView dispatch={dispatch} {...props} />} />
        <Route path="/costHistories" render={props => <HouseCostHistoriesView dispatch={dispatch} {...props} />} />
      </>
    </BrowserRouter>
  )
}

render(
  <App />,
  document.getElementById('app')
)
