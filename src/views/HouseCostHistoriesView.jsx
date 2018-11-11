import React, { useEffect } from 'react'

export default props => {
  useEffect(() => {
    props.dispatch({
      type : 'ChangeTitle',
      title : '家計簿履歴'
    })
  })

  return (
    <div onClick={() => {
      props.history.push('/')
    }}>
      家計簿履歴
    </div>
  )
}
