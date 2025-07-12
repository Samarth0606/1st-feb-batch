import React from 'react'
import D from './D'

function C({count}) {
  return (
    <div>
        <h1>C hu mai</h1>
        <D count={count} />
    </div>
  )
}

export default C