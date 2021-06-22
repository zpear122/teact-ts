import React from "react";
import { NavLink } from "react-router-dom"; 
import "./style.css"
export default class Nav extends React.Component {
    /**
     * NavLink 也可以加上exact去除包含关系
     * 
     */
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeStyle={{color:'green'}} activeClassName="select" exact to="/home">HOME页面</NavLink>
                    </li>
                    <li>
                        {/* <NavLink activeClassName="select"  exact to="/mine">我的</NavLink> */}
                        <NavLink activeClassName="select"  exact to={{
                            pathname:"/mine",
                            search:"?sort=name",
                            hash:"#the-hash",
                            state:{fromDashboard:true} //在这里传递是隐形传递 URL是没有的
                        }}>我的</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="select" exact to="/mine/ucenter/1005/hello">ucenter</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
