import Auth from '../../components/auth'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import PersonIcon from '@material-ui/icons/Person'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

const iconStyle = {
  marginRight : '0.5vw'
}


function Login() {
  return (
    <div style={{marginTop : '3vh', textAlign : 'center'}}>
      <div>
        <TextField
          id="mail-address"
          label="メールアドレス"
        />
      </div>

      <div>
        <TextField
          id="password"
          label="パスワード"
          type="password"
        />
      </div>

      <div style={{marginTop : '3vh'}}>
        <Button
          variant="contained"
          color="primary"
        >
          <PersonIcon style={iconStyle} />
          ログイン
        </Button>
      </div>

      <div style={{marginTop : '10.5vh'}}>
        <Button
          variant="outlined"
          color="primary"
        >
          <PersonAddIcon style={iconStyle} />
          ユーザー新規登録
        </Button>
      </div>
    </div>
  )
}

Login.auth = function auth(page) {
  return <Auth>{page}</Auth>
}

export default Login