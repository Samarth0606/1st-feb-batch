import React from 'react'
import B from './B'

function A({count}) {
  return (
    <div>
        <h1>A hu mai</h1>
        <B count={count} />
    </div>
  )
}

export default A