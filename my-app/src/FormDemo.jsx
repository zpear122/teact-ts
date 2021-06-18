import React from "react";

export default class FormDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    formHandle = (e) => {
        e.preventDefault();
        console.log(this.state.value)
    }

    //没有这个方法表单是不能输入的
    changeHandle = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                FormDemo
                <form onClick={this.formHandle}>
                    <input type="text" value={this.state.value} onChange={this.changeHandle} />
                    <button type="submit">提交</button>
                </form>
            </div>
        )
    }
}