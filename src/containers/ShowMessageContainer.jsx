import React from 'react'

import { connect } from 'react-redux'

import Snackbar from '@material-ui/core/Snackbar'

const ShowMessageContainer = props => (
  <Snackbar
    open={props.isShowMessage}
    onClose={() => props.hideMessage()}
    anchorOrigin={{
      vertical : 'bottom',
      horizontal : 'left'
    }}
    ContentProps={{
      'aria-describedby': 'successMessage',
    }}
    message={<span id="successMessage">{props.messageText}</span>}
  />
)

export default connect(
  ({isShowMessage, messageText}) => ({isShowMessage, messageText}),
  {
    hideMessage : () => ({ type : 'HideMessage' })
  }
)(ShowMessageContainer)
