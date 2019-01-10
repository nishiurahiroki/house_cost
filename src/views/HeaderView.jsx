import React, { useReducer, useState } from 'react'

import { connect } from 'react-redux'

import reducer from '../reducer'

import menus from '../menus.jsx'

import AuthManager from '../utils/AuthManager'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SubdirectoryArrowLeft from '@material-ui/icons/SubdirectoryArrowLeft'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    justifyContent: 'flex-end'
  }
}

const Header = props => {
  const { classes, title } = props

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => setIsDrawerOpen(false)

  const LogoutListItem = () => (
    <ListItem button key="logout" onClick={() => {
      AuthManager.authSignOut()
        .then(() => {
          props.history.push('/')
        })
        .catch(() => {
          // TODO failer pattern.
        })
    }}>
      <ListItemIcon><SubdirectoryArrowLeft /></ListItemIcon>
      <ListItemText primary="ログアウト" />
    </ListItem>
  )

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton onClick={openDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader} onClick={closeDrawer}>
          <IconButton onClick={closeDrawer}>
            {isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menus.map(({name, path, icon}) => (
            <ListItem button key={name} onClick={() => {
              props.history.push(path)
              closeDrawer()
            }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          <LogoutListItem />
        </List>
      </Drawer>
    </div>
  )
}

export default connect(
  ({title}) => ({title}),
  {}
)(withStyles(styles)(Header))
