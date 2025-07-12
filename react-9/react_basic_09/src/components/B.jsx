import React from 'react'
import C from './C'

function B({count}) {
  return (
    <div>
        <h1>B hu mai</h1>
        <C count={count} />
    </div>
  )
}

export default B