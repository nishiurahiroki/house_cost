import React, {useEffect} from 'react'

import { connect } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'

import AuthManager from '../auth/AuthManager'

const AuthContainer = props => {
  const {
    component : Component,
    setActiveUserId
  } = props

  const authUserId = AuthManager.getActiveUserId()
  useEffect(() => {
    setActiveUserId(authUserId)
  }, [])

  if(!authUserId) {
    return <Redirect to={'/login'} />
  }
  return <Component {...props} />
}

export default connect(
  ({}) => ({}),
  {
    setActiveUserId : activeAuthUserId => ({type : 'SetActiveUserId', activeAuthUserId})
  }
)(AuthContainer)
