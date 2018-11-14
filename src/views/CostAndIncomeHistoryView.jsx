import React, {useEffect} from 'react'

import { connect } from 'react-redux'

const HouseCostHistoriesView = props => {
  useEffect(() => {
    props.changeTitle('家計簿履歴')
  }, [])

  return (
    <div onClick={() => {
      props.history.push('/')
    }}>
      家計簿履歴
    </div>
  )
}

export default connect(
  () => ({}),
  { changeTitle : title => ({ type : 'ChangeTitle', title}) }
)(HouseCostHistoriesView)
