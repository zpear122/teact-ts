import React from "react";

export default class Child1 extends React.Component{

    constructor(){
        super();
        this.state = {
            input1:0
        }
    }

    changeHandle(e){
        this.setState({
            input1:e.target.value
        })
    }
    render(){
        return(
            <div>
                child1
                <p>{this.props.money*1}</p>
                <input type="text" value={this.state.input1} onChange={this.changeHandle.bind(this)} />
            </div>
        )
    }
}