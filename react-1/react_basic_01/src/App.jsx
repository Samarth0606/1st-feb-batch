import Counter from "./components/Counter";
import Eventss from "./components/Eventss";
import Person from "./components/Person";
// import Props from "./components/Props";
// import Sam from "./components/Sam";

function App(){
  return(
    <div style={ {color:"red", backgroundColor:"yellow" , fontSize:"20px"} }>
      <h1>Hello from App</h1>
      {/* <Sam /> */}
      {/* <Props naam="samarth" kaam="nothing" isMarried={false} age={20} /> */}
      {/* <Props naam="maverick" kaam="sleeping" isMarried={false} age={3} ></Props> */}

      {/* <Eventss /> */}

      {/* <Person naam="Sam" /> */}
      <Counter />
    </div>
  )
}

export default App;






