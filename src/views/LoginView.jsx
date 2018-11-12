import React from 'react'

export default props => {
  return (
    <div onClick={() => {
      props.history.push('/costs')
    }}>
      ログイン
    </div>
  )
}
