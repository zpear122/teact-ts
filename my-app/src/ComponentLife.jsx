import React from "react";

export default class ComponentLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    //一共七个生命周期
    UNSAFE_componentWillMount() {
        console.log('已经废弃新名字为：UNSAFE_componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate() {
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log('已废弃新名字：UNSAFE_componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('已经废弃，新名字：UNSAFE_componentWillReceiveProps')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    //增加
    async changeHandle(){
        // this.setState((state, props) => {
        //     return {
        //         count: state.count + 1
        //     }
        // }, ()=>{
        //     //在这里就是同步了
        //     console.log(this.state.count)
        // })

        // //因为setState是异步的所以这里也是打印的10而不是11
        // alert(this.state.count)
        await this.setStateAsync({count:this.state.count+1});
        console.log(this.state.count)
    }

    async setStateAsync(state){
        return new Promise((resolve)=>{
            this.setState(state,resolve)
        })
    }


    //子组件修改父组件的title
    changeTitle = ()=> {
        //通过props调用父组件的方法，括号里面可以传值
        this.props.updateTitle("我是子组件传过来的数据title")
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                生命周期:{count} - {this.props.title}<br />
                <button onClick={this.changeHandle.bind(this)}>增加</button>
                <button onClick={this.changeTitle}>子组件修改父组件的title</button>
            </div>
        )
    }
}