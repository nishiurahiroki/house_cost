import React from 'react'
import {render} from 'react-dom'

import reducer from './reducer'

import {createStore} from 'redux'

import Root from './root'

const store = createStore(reducer)

render(
  <Root store={store} />,
  document.getElementById('app')
)
