import React from 'react'

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

export default ({list, onRowDeleteClick}) => (
  <List>
    {list.map(({name, id, amount, isCost, date}, index) => (
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
          <IconButton onClick={() => onRowDeleteClick({isCost, id})}>
            <Cancel fontSize="inherit" color="error" />
          </IconButton>
        </ListItem>
        <Divider inset />
      </span>
    ))}
  </List>
)
