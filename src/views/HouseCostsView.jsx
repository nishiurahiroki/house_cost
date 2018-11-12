import React, {useEffect} from 'react'
import { connect } from 'react-redux'

const HouseCostsView = props => {
  useEffect(() => {
    props.changeTitle('家計簿一覧')
  }, [])

  return (
    <div onClick={() => {
      props.history.push('/costHistories')
    }}>
      家計簿一覧
    </div>
  )
}

export default connect(
  () => ({}),
  { changeTitle : title => ({ type : 'ChangeTitle', title }) }
)(HouseCostsView)
