import React from "react"

class Counter extends React.Component{

    componentDidUpdate(prevProp,prevState){
        if(this.props.counting !== prevProp.count){
            console.log("Component did update");
        }
    }
    render(){
        return(
            <div>
                <h1>{this.props.counting}</h1>
            </div>
        )
    }

}

export default Counter;











