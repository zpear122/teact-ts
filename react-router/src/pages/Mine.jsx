import React from "react";
import querystring from "querystring";
import MineDemo from "./MineDemo";
export default class Mine extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    goback = ()=>{
        // push replace两种  push叠加 replace替换
        // this.props.history.replace两种("/")
        this.props.history.push("/")
    }
    render() {
        const params = new URLSearchParams(this.props.location.search)
        console.log(params)
        console.log(params.get('sort'))

        const value = querystring.parse(this.props.location.search)
        console.log('value', value)

        console.log(this.props)
        return (
            <div>
                Mine
                <button onClick={this.goback}>回到首页</button>
                <MineDemo/>
            </div>
        )
    }
}