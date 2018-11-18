import React from 'react'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

export default ({id, label, value, onChange}) => {
  const formatAmount = e => {
    const inputText = e.target.value.replace(/\,/g , '')
    if(!inputText) {
      onChange('')
      return
    }

    if(isFinite(inputText)) {
      onChange(Number(inputText).toLocaleString())
    }
  }

  return (
    <TextField
      id={id}
      label={label}
      value={value}
      InputProps={{
        startAdornment: <InputAdornment position="start">￥</InputAdornment>
      }}
      onChange={formatAmount}
    />
  )
}
