import React from "react";

export default class RefsForm extends React.Component{

    constructor(){
        super();
        this.username = React.createRef()
        this.pwd = React.createRef();
    }
    
    handle=()=>{
        console.log(this.username.current.value)
        console.log(this.pwd.current.value)
    }

    render(){
        return(
            <div>
                RefsForm
                <div>
                    <input type="text" ref={this.username}/>
                    <input type="text" ref={this.pwd}/>
                    <button onClick={this.handle}>提交</button>
                </div>
            </div>
        )
    }
}