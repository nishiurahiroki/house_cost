import React, {useState} from 'react'

import AuthManager from '../utils/AuthManager'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import PersonAddIcon from '@material-ui/icons/PersonAdd'

import { connect } from 'react-redux'

const iconStyle = {
  marginRight : '0.5vw'
}

const AddUserView = props => {
  const [mailAddress, setMailAddress] = useState('')
  const [password, setPassword] = useState('')

  const add = () => {
    AuthManager.createUser({
      id : mailAddress,
      password
    }).then(() => {
      props.showMessage('ユーザー新規登録に成功しました')
      props.history.push('/')
    }).catch(() => {
      props.showMessage('ユーザー新規登録に失敗しました')
    })
  }

  return (
    <div style={{textAlign : 'center'}}>
      <div style={{ marginTop : '3vh', textAlign : 'center'  }}>
        <TextField
          id="mailAddress"
          label="メールアドレス"
          value={mailAddress}
          onChange={e => setMailAddress(e.target.value)}
        />
      </div>

      <div style={{ textAlign : 'center'  }}>
        <TextField
          id="password"
          type="password"
          label="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div style={{marginTop : '3vh'}}>
        <Button
          variant="contained"
          color="primary"
          onClick={add}
        >
          <PersonAddIcon style={iconStyle} />
          追加
        </Button>
      </div>
    </div>
  )
}

export default connect(
  ({}) => ({}),
  {
    showMessage : messageText => ({type : 'ShowMessage', messageText})
  }
)(AddUserView)
