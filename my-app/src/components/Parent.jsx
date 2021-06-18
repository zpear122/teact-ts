import React from "react";

import Child1 from "./Child1"
import Child2 from "./Child2"

export default class Parent extends React.Component{

    constructor(){
        super();
        this.state = {
            input:0
        }
    }

    changeHandle(e){
        this.setState({
            input:e.target.value
        })
    }

    render(){
        return(
            <div>
                Parent
                <input type="text" value={this.state.input} onChange={this.changeHandle.bind(this)} />
                <div>
                    人名币：<Child1 money={this.state.input}/>
                    美元：<Child2 money={this.state.input}/>
                </div>
            </div>
        )
    }
}