import React from "react";

export default class Child2 extends React.Component{
    constructor(){
        super();
        this.state = {
            input2:0
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
                child2
                <p>{this.props.money*7}</p>
                <input type="text" value={this.state.input2} onChange={this.changeHandle.bind(this)} />
            </div>
        )
    }
}