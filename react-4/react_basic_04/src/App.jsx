import React from "react";

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      number: 0,
    }
  }

  componentDidMount(){ console.log("Component did mount") }

  componentDidUpdate(prevProp){ 
    if(this.state.number !== prevProp.number){
      console.log("Component did update")
    }
  }

  handleInc() { this.setState( { number: this.state.number + 1}) }
  handleDec() { this.setState( { number: this.state.number - 1}) }

  render(){
    return(
      <div>
        <h1> number: {this.state.number} </h1>
        { this.state.number < 5 ? <Greeting /> : null }
        <button onClick={this.handleDec.bind(this)} >-</button>
        <button onClick={this.handleInc.bind(this)} >+</button>
      </div>
    )
  }
}

class Greeting extends React.Component{
  componentWillUnmount(){
    console.log("component unmounted");
  }
  render(){
    return(
      <h1>GREETING FROM SAMARTH</h1>
    )
  }
}





// ----------------------------------------------------

// import React from "react";
// // import Counter from "./components/Counter";

// export default class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }

//   componentDidMount(){
//     console.log("Mounted the component");
//   }

//   decrement() {
//     this.setState({count: this.state.count - 1 })
//   }

//   componentWillUnmount(){
//     console.log("component will unmount");
//   }

//   render(){
//     return(
//       <div>
//         <Counter counting={this.state.count}  />
         
//         <h1 onClick={ this.decrement.bind(this) } >DECREASE</h1>
//         <h1> {this.state.count} </h1>
//         <h1 onClick={ ()=> this.setState({count: this.state.count + 1}) } >INCREASE</h1>
//       </div>
//     )
//   }
// }


// class Counter extends React.Component{

//     componentDidUpdate(prevProp,prevState){
//         if(this.props.counting !== prevProp.count){
//             console.log("Component did update");
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.counting}</h1>
//             </div>
//         )
//     }

// }



