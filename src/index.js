import React, {useState} from 'react'
import {render} from 'react-dom'

const Counter = props => {
  const [count, setValue] = useState(0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setValue(count + 1)}>add</button>
      <button onClick={() => setValue(count - 1)}>dec</button>
    </>
  )
}

render(
  <Counter />,
  document.getElementById('app')
)
