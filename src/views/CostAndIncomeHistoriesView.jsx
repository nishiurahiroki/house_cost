import React, {useEffect, useState} from 'react'

import CostRepository from '../repositories/CostRepository'
import IncomeRepository from '../repositories/IncomeRepository'

import CostAndIncomeList from '../components/CostAndIncomeList.jsx'

import Snackbar from '@material-ui/core/Snackbar'
import NowLoading from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux'

const alignCenter = {
  textAlign : 'center'
}

const HouseCostHistoriesView = props => {
  const [isLoading, showLoading] = useState(true)
  const [isShowMessage, setIsShowMessage] = useState(false)
  const [messageText, showMessageText] = useState('')

  const showList = async () => {
    showLoading(true)
    const costs = await CostRepository.getCosts({})
    const incomes = await IncomeRepository.getIncomes({})
    props.showList({costs, incomes})
    showLoading(false)
  }

  useEffect(async () => {
    props.changeTitle('入出費一覧')
    await showList()
  }, [])

  const showMessage = message => {
    setIsShowMessage(true)
    showMessageText(message)
  }

  const closeMessage = () => {
    setIsShowMessage(false)
    showMessageText('')
  }

  const deleteCostOrIncome = async ({isCost, id}) => {
    const deleteCount = await (async (isCost, deleteId) => {
      if(isCost) {
        return await CostRepository.delete(deleteId)
      }
      return await IncomeRepository.delete(deleteId)
    })(isCost, id)

    if(deleteCount === 1) {
      showMessage('削除に成功しました')
      await showList()
    } else {
      showMessage('削除に失敗しました')
    }
  }

  return (
    <div style={isLoading ? alignCenter : {}}>
      {
        isLoading ?
          <NowLoading/> :
          <CostAndIncomeList
            list={props.costAndIncomeList}
            onRowDeleteClick={({isCost, id}) => deleteCostOrIncome({isCost, id})}
          />
      }

      <Snackbar
        open={isShowMessage}
        onClose={closeMessage}
        anchorOrigin={{
          vertical : 'bottom',
          horizontal : 'left'
        }}
        ContentProps={{
          'aria-describedby': 'successMessage',
        }}
        message={<span id="successMessage">{messageText}</span>}
      />
    </div>
  )
}

export default connect(
  ({costAndIncomeList}) => ({costAndIncomeList}),
  {
    changeTitle : title => ({ type : 'ChangeTitle', title}),
    showList : ({costs, incomes}) => (
      {
        type : 'ShowCostAndIncomeList',
        costs,
        incomes
      }
    )
  }
)(HouseCostHistoriesView)
