import React, {useEffect, useState} from 'react'

import CostRepository from '../repositories/CostRepository'
import IncomeRepository from '../repositories/IncomeRepository'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import Cancel from '@material-ui/icons/Cancel'

import Snackbar from '@material-ui/core/Snackbar'
import NowLoading from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux'

const alignCenter = {
  textAlign : 'center'
}

const HouseCostHistoriesView = props => {
  const [isLoading, setLoading] = useState(true)
  const [isShowMessage, setIsShowMessage] = useState(false)
  const [messageText, showMessageText] = useState('')

  const showList = async () => {
    setLoading(true)
    const costs = await CostRepository.getCosts({})
    const incomes = await IncomeRepository.getIncomes({})
    props.showList({costs, incomes})
    setLoading(false)
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

  const deleteCostOrIncome = async ({isCost, deleteId}) => {
    const deleteCount = await (async (isCost, deleteId) => {
      if(isCost) {
        return await CostRepository.delete(deleteId)
      }
      return await IncomeRepository.delete(deleteId)
    })(isCost, deleteId)

    if(deleteCount === 1) {
      showMessage('削除に成功しました')
      await showList()
    } else {
      showMessage('削除に失敗しました')
    }
  }

  const CostAndIncomeList = () => <List>
    {props.costAndIncomeList.map(({name, id, amount, isCost, date}, index) => (
      <span key={index}>
        <ListItem>
          <Avatar>
            {isCost ? <Remove /> : <Add />}
          </Avatar>
          <ListItemText secondary={name}>
            <Typography color={isCost ? 'error' : 'primary'}>
              ￥{Number(amount).toLocaleString()}　-　{date}
            </Typography>
          </ListItemText>
          <IconButton onClick={() => deleteCostOrIncome({
            isCost,
            deleteId : id
          })}>
            <Cancel fontSize="inherit" color="error" />
          </IconButton>
        </ListItem>
        <Divider inset />
      </span>
    ))}
  </List>

  return (
    <div style={isLoading ? alignCenter : {}}>
      {isLoading ? <NowLoading/> : <CostAndIncomeList/>}

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
