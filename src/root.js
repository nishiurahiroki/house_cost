import React from 'react'

import {Provider} from 'react-redux'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginView from './views/LoginView.jsx'
import CostInputView from './views/CostInputView.jsx'
import CostAndIncomeHistoryView from './views/CostAndIncomeHistoryView.jsx'
import HeaderView from './views/HeaderView.jsx'

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route component={HeaderView} />
        </Switch>
        <Route path="/costInput" component={CostInputView} />
        <Route path="/costAndIncomeHistoryView" component={CostAndIncomeHistoryView} />
      </>
    </BrowserRouter>
  </Provider>
)

export default Root
