import React from "react";

export default class StateComponent extends React.Component {
    /**
     * 组件中的状态:state
     * 以前我们操作页面元素的变化，都是修改dom,操作dom
     * 但是在react里面 我们不在推荐操作dom,页面元素的改变使用State进行处理
     * 
     */
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            flag: true
        }
    }

    increment() {
        //set State
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        //set State
        this.setState({
            count: this.state.count - 1
        })
    }

    //和vue一样 这样就不用绑定this了
    clickHandler = () => {
        console.log(this)
    }

    render() {
        let showView = this.state.flag === true ? "1" : "2";
        return (
            <div>
                <h3>组件的state</h3>
                <h4>{this.state.count}</h4>
                <button onClick={this.increment.bind(this)}>增加</button>
                <button onClick={this.decrement.bind(this)}>减少</button>
                <button onClick={this.clickHandler}>关于this</button>
                <div>{showView}</div>
            </div>
        )
    }
}