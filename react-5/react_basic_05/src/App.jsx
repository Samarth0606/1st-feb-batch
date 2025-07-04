
import Event from "./components/Event";
import Memoo from "./components/Memoo";
import UseCallback from "./components/useCallback";
import Usememoo from "./components/Usememoo";

function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      {/* <Memoo remote="HC VERMA"  /> */}
      {/* <Event /> */}
      {/* <Usememoo /> */}
      <UseCallback />
    </div>
  )
}

export default App;

// ---------------------------------------

// import { Fragment } from "react";
// import Memoo from "./components/Memoo";

// function App(){
//   return(
//     <Fragment>
//       <h1>Hello from App</h1>
//       <Memoo remote="HC VERMA"  />
//     </Fragment>
//   )
// }

// export default App;

// ---------------------------------------

// import React from "react";
// import Memoo from "./components/Memoo";

// function App(){
//   return(
//     <React.Fragment>
//       <h1>Hello from App</h1>
//       <Memoo remote="HC VERMA"  />
//     </React.Fragment>
//   )
// }

// export default App;