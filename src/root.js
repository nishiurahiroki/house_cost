import React from 'react'

import {Provider} from 'react-redux'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginView from './views/LoginView.jsx'
import HouseCostsView from './views/HouseCostsView.jsx'
import HouseCostHistoriesView from './views/HouseCostHistoriesView.jsx'
import HeaderView from './views/HeaderView.jsx'

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route component={HeaderView} />
        </Switch>
        <Route path="/costs" component={HouseCostsView} />
        <Route path="/costHistories" component={HouseCostHistoriesView} />
      </>
    </BrowserRouter>
  </Provider>
)

export default Root
