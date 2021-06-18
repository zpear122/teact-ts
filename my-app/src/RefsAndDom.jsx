import React from "react";

export default class RefsAndDom extends React.Component{

    constructor(){
        super();
        this.HelloDiv = React.createRef() //代表创建好的一个获取dom的对象
    }
    componentDidMount(){
        console.log(this.HelloDiv.current.style.color = "red")
    }

    render(){
        return(
            <div>
                RefsAndDom
                <div ref = { this.HelloDiv }>
                    hello
                </div>
            </div>
        )
    }
}