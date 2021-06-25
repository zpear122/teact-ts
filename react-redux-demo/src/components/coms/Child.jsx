import React from "react";
export default class Child extends React.Component{

    handle=()=>{
        this.props.onMyClick('父标题')
    }
    render(){
        return(
            <div>
                Child
                {this.props.title}
                <button onClick={this.handle}>子组件传递数据</button>
            </div>
        )
    }
}