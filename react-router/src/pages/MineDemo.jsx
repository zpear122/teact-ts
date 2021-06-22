import React from "react";

import { withRouter } from "react-router";

class MineDemo extends React.Component{

    goHandle= ()=>{
        console.log(this.props)
        /** 它是在mine组件里面引用的
         * 当前组件没有被路由管理  所以没有路由对象  所以跳转会失效
         */ 

    }

    render(){
        return(
            <div>
                Home
                <button onClick={this.goHandle}>MineDemo回到Home</button>
            </div>
        )
    }
}
/**
 * 高阶组件的处理方案withRouter
 */
export default withRouter(MineDemo)
