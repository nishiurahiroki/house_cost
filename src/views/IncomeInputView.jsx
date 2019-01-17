import React, {useState ,useEffect} from 'react'
import { connect } from 'react-redux'

import InputAmount from '../components/InputAmount.jsx'

import IncomeTypeRepository from '../repositories/IncomeTypeRepository'
import IncomeRepository from '../repositories/IncomeRepository'

import DateUtil from '../utils/DateUtil.js'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'

const IncomeInputView = props => {
  const [inputDate, setInputDate] = useState(DateUtil.getNowString({}))
  const [amount, setAmount] = useState('')
  const [incomeTypes, setIncomeTypes] = useState([ { name : '読み込み中...', id : 'dummy', key : 'dummyKey' } ])
  const [incomeId, setIncomeId] = useState('1')

  useEffect(async () => {
    props.changeTitle('収入入力')
    await IncomeTypeRepository.getTypes(props.activeAuthUserId).then(types => setIncomeTypes(types))
  }, [])

  const save = async () => {
    IncomeRepository.save({
      date : inputDate,
      amount,
      incomeId,
      addUserId : props.activeAuthUserId
    }).then(() => {
      props.showMessage('登録しました')
      setAmount('')
    }).catch(e => {
      console.log(e) // TODO Error handling.
      props.showMessage('登録に失敗しました')
    })
  }

  return (
    <>
      <div style={{ marginTop : '3vh', textAlign : 'center'  }}>
        <TextField
          id="date"
          label="日にち"
          type="date"
          value={inputDate}
          InputLabelProps={{shrink: true}}
          onChange={e => setInputDate(e.target.value)}
        />
      </div>

      <div style={{ marginTop : '3vh', textAlign : 'center'  }}>
        <TextField
          id="costTypes"
          select
          label="収入内容"
          value={incomeId}
          onChange={e => setIncomeId(e.target.value)}
        >
          {incomeTypes.map(({name, id, key}) =>
            <MenuItem key={key} value={id}>{name}</MenuItem>
          )}
        </TextField>
      </div>

      <div style={{ marginTop : '3vh', textAlign : 'center'  }}>
        <InputAmount
          id="costAmount"
          label="金額"
          value={amount}
          onChange={formatedAmount => setAmount(formatedAmount)}
        />
      </div>

      <div style={{ marginTop : '5vh', textAlign : 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={save}
        >
          <SaveIcon style={{ fontSize : '18', marginRight : '1vw' }}/>登録
        </Button>
      </div>
    </>
  )
}

export default connect(
  ({activeAuthUserId}) => ({activeAuthUserId}),
  {
    changeTitle : title => ({ type : 'ChangeTitle', title }),
    showMessage : messageText => ({ type : 'ShowMessage', messageText })
  }
)(IncomeInputView)
