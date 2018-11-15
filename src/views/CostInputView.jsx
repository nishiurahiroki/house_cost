import React, {useState ,useEffect} from 'react'
import { connect } from 'react-redux'

import CostTypeRepository from '../repositories/CostTypeRepository'
import CostRepository from '../repositories/CostRepository'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'

const CostInputView = props => {
  const today = new Date().toLocaleDateString().replace(/\//g , '-')

  const [inputDate, setInputDate] = useState(today)
  const [amount, setAmount] = useState('')
  const [costTypes, setCostTypes] = useState([ { name : '読み込み中...', id : 'dummy' } ])
  const [costId, setCostId] = useState('1')

  useEffect(() => {
    props.changeTitle('出費入力')
    CostTypeRepository.getTypes().then(types => setCostTypes(types))
  }, [])

  const formatAmount = e => {
    const inputText = e.target.value.replace(/\,/g , '')
    if(!inputText) {
      setAmount('')
      return
    }

    if(isFinite(inputText)) {
      setAmount(Number(inputText).toLocaleString())
    }
  }

  const save = async () => {
    const saveCount = await CostRepository.save({
      date : inputDate,
      amount,
      costId
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
          label="出費内容"
          value={costId}
          onChange={e => setCostId(e.target.value)}
        >
          {costTypes.map(({name, id}) =>
            <MenuItem key={id} value={id}>{name}</MenuItem>
          )}
        </TextField>
      </div>

      <div style={{ marginTop : '3vh', textAlign : 'center'  }}>
        <TextField
          id="amount"
          label="金額"
          value={amount}
          InputProps={{
            startAdornment: <InputAdornment position="start">￥</InputAdornment>
          }}
          onChange={formatAmount}
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
  () => ({}),
  { changeTitle : title => ({ type : 'ChangeTitle', title }) }
)(CostInputView)
