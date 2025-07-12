import React, { useState } from 'react'
import A from './components/A'
import PropDrilling from './components/PropDrilling';

function App() {
  // const [count,setCount] = useState(10);
  return (
    <div>
      {/* <A count={count} /> */}
      <PropDrilling />
    </div>
  )
}

export default App