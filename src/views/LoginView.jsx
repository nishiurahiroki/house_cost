import React, {useState} from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import AuthManager from '../utils/AuthManager'

export default props => {
  const [mailAddress, setMailAddress] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    AuthManager.auth({
      id : mailAddress,
      password
    }).then((resolve) => {
      props.history.push('/costs')
    }).catch(() => {
      // TODO error handling.
    })
  }

  return (
    <div>
      <div>
        <TextField
          id="mail-address"
          label="メールアドレス"
          value={mailAddress}
          onChange={e => setMailAddress(e.target.value)}
        />
      </div>

      <div>
        <TextField
          id="password"
          label="パスワード"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div style={{marginTop : '3vh'}}>
        <Button
          variant="contained"
          color="primary"
          onClick={login}
        >
          ログイン
        </Button>
      </div>
    </div>
  )
}
