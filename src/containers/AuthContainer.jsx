import React from 'react'

import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

import AuthManager from '../auth/AuthManager'

const AuthContainer = props => {
  const {
    component : Component,
    setActiveUserId
  } = props

  const authUserId = AuthManager.getActiveUserId()
  if(!authUserId) {
    return <Redirect to={'/login'} />
  }

  setActiveUserId(authUserId)
  return <Component {...props} />
}

export default connect(
  ({}) => ({}),
  {
    setActiveUserId : activeAuthUserId => ({type : 'SetActiveUserId', activeAuthUserId})
  }
)(AuthContainer)
