import React, { useEffect } from 'react'

export default props => {
  useEffect(() => {
    props.dispatch({
      type : 'ChangeTitle',
      title : '家計簿一覧'
    })
  })

  return (
    <div onClick={() => {
      props.history.push('/costHistories')
    }}>
      家計簿一覧
    </div>
  )
}
