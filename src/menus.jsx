import React from 'react'

import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import ViewHeadline from '@material-ui/icons/ViewHeadline'

export default [
  {
    name : '出費入力',
    path : '/costInput',
    icon : <Remove />
  },
  {
    name : '収入入力',
    path : '/incomeInput',
    icon : <Add />
  },
  {
    name : '入出費一覧',
    path : '/costAndIncomeHistories',
    icon : <ViewHeadline />
  }
]
