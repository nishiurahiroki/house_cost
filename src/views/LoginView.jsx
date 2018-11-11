import React from 'react'

export default props => {
  return (
    <div onClick={() => {
      console.log('ログイン画面')
      props.history.push('/costs')
    }}>
      ログイン
    </div>
  )
}
