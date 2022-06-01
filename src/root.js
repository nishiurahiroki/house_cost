import React from 'react'

import {Provider} from 'react-redux'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginView from './views/LoginView.jsx'
import CostInputView from './views/CostInputView.jsx'
import IncomeInputView from './views/IncomeInputView.jsx'
import CostAndIncomeHistoriesView from './views/CostAndIncomeHistoriesView.jsx'
import HeaderView from './views/HeaderView.jsx'
import AddUserView from './views/AddUserView.jsx'

import AuthContainer from './containers/AuthContainer.jsx'
import ShowMessageContainer from './containers/ShowMessageContainer.jsx'

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route exact path="/addUser" component={AddUserView} />
          <Route component={HeaderView} />
        </Switch>
        <Route exact path="/" render={props => <AuthContainer {...props} component={CostInputView} />} />
        <Route path="/costInput" render={props => <AuthContainer {...props} component={CostInputView} />} />
        <Route path="/incomeInput" render={props => <AuthContainer {...props} component={IncomeInputView} />} />
        <Route path="/costAndIncomeHistories" render={props => <AuthContainer {...props} component={CostAndIncomeHistoriesView}/> } />

        <ShowMessageContainer/>
      </>
    </BrowserRouter>
  </Provider>
)

export default Root
