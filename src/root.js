import React from 'react'

import {Provider} from 'react-redux'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginView from './views/LoginView.jsx'
import CostInputView from './views/CostInputView.jsx'
import IncomeInputView from './views/IncomeInputView.jsx'
import CostAndIncomeHistoriesView from './views/CostAndIncomeHistoriesView.jsx'
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
        <Route path="/incomeInput" component={IncomeInputView} />
        <Route path="/costAndIncomeHistories" component={CostAndIncomeHistoriesView} />
      </>
    </BrowserRouter>
  </Provider>
)

export default Root
