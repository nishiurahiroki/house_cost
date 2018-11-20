import React, {useEffect} from 'react'

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

import { connect } from 'react-redux'

const HouseCostHistoriesView = props => {
  useEffect(async () => {
    props.changeTitle('入出費一覧')
    const costs = await CostRepository.getCosts({})
    const incomes = await IncomeRepository.getIncomes({})
    props.showCostAndIncomeList(costs)
  }, [])

  return (
    <div>
      <List>
        {props.costAndIncomeList.map(({name, id, amount}, index) => (
          <span key={index}>
            <ListItem>
              <Avatar>
                <Add/>
              </Avatar>
              <ListItemText secondary={name}>
                <Typography variant="h6" color="primary">{amount}</Typography>
              </ListItemText>
              <IconButton>
                <Cancel fontSize="inherit" color="error" />
              </IconButton>
            </ListItem>
            <Divider inset />
          </span>
        ))}
      </List>
    </div>
  )
}

export default connect(
  ({costAndIncomeList}) => ({costAndIncomeList}),
  {
    changeTitle : title => ({ type : 'ChangeTitle', title}),
    showCostAndIncomeList : costAndIncomeList => ({ type : 'ShowCostAndIncomeList', costAndIncomeList })
  }
)(HouseCostHistoriesView)
